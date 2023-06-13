/*
  Warnings:

  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `Team` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "Quotes" (
    "id" TEXT NOT NULL,
    "quoteNumber" INTEGER NOT NULL,
    "quote" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Quotes_quoteNumber_idx" ON "Quotes"("quoteNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Team_id_key" ON "Team"("id");

-- CreateIndex
CREATE INDEX "Team_twitchUserId_idx" ON "Team"("twitchUserId");
