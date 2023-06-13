/*
  Warnings:

  - Added the required column `lore` to the `Quotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quotes" ADD COLUMN     "lore" TEXT NOT NULL;
