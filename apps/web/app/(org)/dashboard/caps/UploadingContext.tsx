"use client";

import { createContext, useContext, type ReactNode } from "react";

const UploadingContext = createContext<null>(null);

export function UploadingProvider({ children }: { children: ReactNode }) {
	return (
		<UploadingContext.Provider value={null}>
			{children}
		</UploadingContext.Provider>
	);
}

export function useUploadingContext() {
	return useContext(UploadingContext);
}

export function useUploading() {
	return useContext(UploadingContext);
}

export function useUploadingStatus() {
	return null;
}
