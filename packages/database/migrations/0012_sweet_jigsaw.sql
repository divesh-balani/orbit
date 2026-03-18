CREATE TABLE `desktop_access_grants` (
	`userId` varchar(15) NOT NULL,
	`status` varchar(32) NOT NULL DEFAULT 'pending',
	`validUntil` timestamp,
	`approvedByUserId` varchar(15),
	`approvedAt` timestamp,
	`revokedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `desktop_access_grants_userId` PRIMARY KEY(`userId`)
);
--> statement-breakpoint
CREATE INDEX `desktop_access_status_idx` ON `desktop_access_grants` (`status`);--> statement-breakpoint
CREATE INDEX `desktop_access_valid_until_idx` ON `desktop_access_grants` (`validUntil`);