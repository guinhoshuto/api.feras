-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "twitchUserId" TEXT NOT NULL,
    "twitchUsername" TEXT NOT NULL,
    "twichProfileImageUrl" TEXT NOT NULL,
    "offlineImageUrl" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);
