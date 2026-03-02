"use client";

import type { VideoMetadata } from "@orbit/database/types";
import type { Video } from "@orbit/web-domain";
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CapCard } from "../../../caps/components/CapCard/CapCard";

interface SharedCapCardProps {
	orbit: {
		id: Video.VideoId;
		ownerId: string;
		name: string;
		createdAt: Date;
		totalComments: number;
		totalReactions: number;
		ownerName: string | null;
		metadata?: VideoMetadata;
		hasActiveUpload: boolean | undefined;
	};
	analytics: number;
	isLoadingAnalytics: boolean;
	organizationName: string;
	userId?: string;
	hideSharedStatus?: boolean;
	spaceName?: string;
	onDragStart?: () => void;
	onDragEnd?: () => void;
}

export const SharedCapCard: React.FC<SharedCapCardProps> = ({
	orbit,
	analytics,
	organizationName,
	userId,
	hideSharedStatus,
	isLoadingAnalytics,
	spaceName,
	onDragStart,
	onDragEnd,
}) => {
	const displayCount =
		analytics === 0
			? Math.max(orbit.totalComments, orbit.totalReactions)
			: analytics;
	const isOwner = userId === orbit.ownerId;

	return (
		<div onDragStart={onDragStart} onDragEnd={onDragEnd}>
			<CapCard
				hideSharedStatus={hideSharedStatus}
				isLoadingAnalytics={isLoadingAnalytics}
				orbit={orbit}
				analytics={displayCount}
				userId={userId}
			>
				<div className="mb-2 space-y-1">
					{orbit.ownerName && (
						<div className="flex gap-2 items-center">
							<FontAwesomeIcon icon={faUser} className="text-gray-10 size-3" />
							<span className="text-sm text-gray-10">{orbit.ownerName}</span>
						</div>
					)}
					{isOwner && (
						<div className="flex gap-2 items-center">
							<FontAwesomeIcon
								icon={faBuilding}
								className="text-gray-10 size-2.5"
							/>
							<p className="text-sm pointer-events-none text-gray-10">
								Shared with{" "}
								<span className="text-sm font-medium text-gray-12">
									{spaceName || organizationName}
								</span>
							</p>
						</div>
					)}
				</div>
			</CapCard>
		</div>
	);
};
