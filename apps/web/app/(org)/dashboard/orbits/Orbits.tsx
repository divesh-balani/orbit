"use client";

import type { VideoMetadata } from "@orbit/database/types";
import { Button } from "@orbit/ui";
import type { ImageUpload, Video } from "@orbit/web-domain";
import { faFolderPlus, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Effect, Exit } from "effect";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { useEffectMutation, useRpcClient } from "@/lib/EffectRuntime";
import { useVideosAnalyticsQuery } from "@/lib/Queries/Analytics";
import { useDashboardContext } from "../Contexts";
import {
	NewFolderDialog,
	SelectedOrbitsBar,
	UploadOrbitButton,
	UploadPlaceholderCard,
	WebRecorderDialog,
} from "./components";
import { OrbitCard } from "./components/OrbitCard/OrbitCard";
import { OrbitPagination } from "./components/OrbitPagination";
import { EmptyOrbitState } from "./components/EmptyOrbitState";
import type { FolderDataType } from "./components/Folder";
import Folder from "./components/Folder";
import { useUploadingStatus } from "./UploadingContext";

export type VideoData = {
	id: Video.VideoId;
	ownerId: string;
	name: string;
	createdAt: Date;
	public: boolean;
	totalComments: number;
	totalReactions: number;
	foldersData: FolderDataType[];
	sharedOrganizations: {
		id: string;
		name: string;
		iconUrl?: ImageUpload.ImageUrl | null;
	}[];
	sharedSpaces?: {
		id: string;
		name: string;
		isOrg: boolean;
		organizationId: string;
	}[];
	ownerName: string;
	metadata?: VideoMetadata;
	hasPassword: boolean;
	hasActiveUpload: boolean;
}[];

export const Orbits = ({
	data,
	count,
	analyticsEnabled,
	folders,
}: {
	data: VideoData;
	count: number;
	folders: FolderDataType[];
	analyticsEnabled: boolean;
}) => {
	const router = useRouter();
	const params = useSearchParams();
	const page = Number(params.get("page")) || 1;
	const { user } = useDashboardContext();
	const limit = 15;
	const [openNewFolderDialog, setOpenNewFolderDialog] = useState(false);
	const totalPages = Math.ceil(count / limit);
	const previousCountRef = useRef<number>(0);
	const [selectedOrbits, setSelectedOrbits] = useState<Video.VideoId[]>([]);
	const [isDraggingOrbit, setIsDraggingCap] = useState(false);

	const anyOrbitSelected = selectedOrbits.length > 0;

	const analyticsQuery = useVideosAnalyticsQuery(
		data.map((video) => video.id),
		analyticsEnabled,
	);
	const analytics: Partial<Record<Video.VideoId, number>> =
		analyticsQuery.data || {};
	const isLoadingAnalytics = analyticsEnabled && analyticsQuery.isLoading;

	const handleOrbitSelection = (orbitId: Video.VideoId) => {
		setSelectedOrbits((prev) => {
			const newSelection = prev.includes(orbitId)
				? prev.filter((id) => id !== orbitId)
				: [...prev, orbitId];

			previousCountRef.current = prev.length;

			return newSelection;
		});
	};

	const rpc = useRpcClient() as {
		VideoDelete: (id: Video.VideoId) => Effect.Effect<void, unknown, never>;
	};

	const { mutate: deleteOrbits, isPending: isDeletingOrbits } = useEffectMutation({
		mutationFn: Effect.fn(function* (ids: Video.VideoId[]) {
			if (ids.length === 0) return { success: 0 };

			const results = yield* Effect.all(
				ids.map((id) => rpc.VideoDelete(id).pipe(Effect.exit)),
				{ concurrency: 10 },
			);

			const successCount = results.filter(Exit.isSuccess).length;

			const errorCount = ids.length - successCount;

			if (successCount > 0 && errorCount > 0) {
				return { success: successCount, error: errorCount };
			} else if (successCount > 0) {
				return { success: successCount };
			} else {
				return yield* Effect.fail(
					new Error(
						`Failed to delete ${errorCount} orbit${errorCount === 1 ? "" : "s"}`,
					),
				);
			}
		}),
		onMutate: (ids: Video.VideoId[]) => {
			toast.loading(
				`Deleting ${ids.length} orbit${ids.length === 1 ? "" : "s"}...`,
			);
		},
		onSuccess: (data: { success: number; error?: number }) => {
			setSelectedOrbits([]);
			router.refresh();
			if (data.error) {
				toast.success(
					`Successfully deleted ${data.success} orbit${
						data.success === 1 ? "" : "s"
					}, but failed to delete ${data.error} orbit${
						data.error === 1 ? "" : "s"
					}`,
				);
			} else {
				toast.success(
					`Successfully deleted ${data.success} orbit${
						data.success === 1 ? "" : "s"
					}`,
				);
			}
		},
		onError: (error: unknown) => {
			const message =
				error instanceof Error
					? error.message
					: "An error occurred while deleting caps";
			toast.error(message);
		},
	});

	const { mutate: deleteOrbit, isPending: isDeletingCap } = useEffectMutation({
		mutationFn: Effect.fn(function* (id: Video.VideoId) {
			yield* rpc.VideoDelete(id);
		}),
		onSuccess: () => {
			toast.success("Orbit deleted successfully");
			router.refresh();
		},
		onError: (_error: unknown) => toast.error("Failed to delete orbit"),
	});

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && selectedOrbits.length > 0) {
				setSelectedOrbits([]);
			}

			if (
				(e.key === "Delete" || e.key === "Backspace") &&
				selectedOrbits.length > 0
			) {
				if (e.key === "Backspace") {
					e.preventDefault();
				}

				if (
					!["INPUT", "TEXTAREA", "SELECT"].includes(
						document.activeElement?.tagName || "",
					)
				) {
					deleteOrbits(selectedOrbits);
				}
			}

			if (e.key === "a" && (e.ctrlKey || e.metaKey) && data.length > 0) {
				if (
					!["INPUT", "TEXTAREA", "SELECT"].includes(
						document.activeElement?.tagName || "",
					)
				) {
					e.preventDefault();
					setSelectedOrbits(data.map((orbit) => orbit.id));
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [selectedOrbits, data, deleteOrbits]);

	useEffect(() => {
		const handleDragStart = () => setIsDraggingCap(true);
		const handleDragEnd = () => setIsDraggingCap(false);

		window.addEventListener("dragstart", handleDragStart);
		window.addEventListener("dragend", handleDragEnd);

		return () => {
			window.removeEventListener("dragstart", handleDragStart);
			window.removeEventListener("dragend", handleDragEnd);
		};
	}, []);

	const [isUploading, uploadingOrbitId] = useUploadingStatus();
	const visibleVideos = useMemo(
		() =>
			isUploading && uploadingOrbitId
				? data.filter((video) => video.id !== uploadingOrbitId)
				: data,
		[data, isUploading, uploadingOrbitId],
	);

	if (count === 0 && folders.length === 0) return <EmptyOrbitState />;

	return (
		<div className="flex relative flex-col w-full h-full">
			<NewFolderDialog
				open={openNewFolderDialog}
				onOpenChange={setOpenNewFolderDialog}
			/>
			<div className="flex flex-wrap gap-3 items-center mb-10 w-full">
				<Button
					onClick={() => setOpenNewFolderDialog(true)}
					size="sm"
					variant="dark"
					className="flex gap-2 items-center w-fit"
				>
					<FontAwesomeIcon className="size-3.5" icon={faFolderPlus} />
					New Folder
				</Button>
				<UploadOrbitButton size="sm" />
				<WebRecorderDialog />
			</div>
			{folders.length > 0 && (
				<>
					<div className="flex gap-3 items-center mb-6 w-full">
						<h1 className="text-2xl font-medium text-gray-12">Folders</h1>
					</div>
					<div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mb-10">
						{folders.map((folder) => (
							<Folder key={folder.id} {...folder} />
						))}
					</div>
				</>
			)}
			{visibleVideos.length > 0 && (
				<>
					<div className="flex justify-between items-center mb-6 w-full">
						<h1 className="text-2xl font-medium text-gray-12">Videos</h1>
					</div>

					<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
						{isUploading && (
							<UploadPlaceholderCard key={"upload-placeholder"} />
						)}
						{visibleVideos.map((video) => {
							const videoAnalytics = analytics[video.id];
							return (
								<OrbitCard
									key={video.id}
									orbit={video}
									analytics={videoAnalytics ?? 0}
									onDelete={() => {
										if (selectedOrbits.length > 0) {
											deleteOrbits(selectedOrbits);
										} else {
											deleteOrbit(video.id);
										}
									}}
									userId={user?.id}
									isLoadingAnalytics={isLoadingAnalytics}
									isSelected={selectedOrbits.includes(video.id)}
									anyOrbitSelected={anyOrbitSelected}
									onSelectToggle={() => handleOrbitSelection(video.id)}
								/>
							);
						})}
					</div>
				</>
			)}
			{(data.length > limit || data.length === limit || page !== 1) && (
				<div className="mt-7">
					<OrbitPagination currentPage={page} totalPages={totalPages} />
				</div>
			)}
			<SelectedOrbitsBar
				selectedOrbits={selectedOrbits}
				setSelectedOrbits={setSelectedOrbits}
				deleteSelectedOrbits={() => deleteOrbits(selectedOrbits)}
				isDeleting={isDeletingOrbits || isDeletingCap}
			/>
			{isDraggingOrbit && (
				<div className="fixed inset-0 z-50 pointer-events-none">
					<div className="flex justify-center items-center w-full h-full">
						<div className="flex gap-2 items-center px-5 py-3 text-sm font-medium text-white rounded-xl bg-blue-12">
							<FontAwesomeIcon
								className="size-3.5 text-white opacity-50"
								icon={faInfoCircle}
							/>
							<p className="text-white">
								Drag to a space to share or folder to move
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
