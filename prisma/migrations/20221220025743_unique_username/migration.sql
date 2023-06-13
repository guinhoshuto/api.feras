/*
  Warnings:

  - A unique constraint covering the columns `[twitchUserId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Team_twitchUserId_key" ON "Team"("twitchUserId");
