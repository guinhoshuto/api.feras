/*
  Warnings:

  - A unique constraint covering the columns `[quoteNumber]` on the table `Quotes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Quotes_quoteNumber_key" ON "Quotes"("quoteNumber");
