/*
  Warnings:

  - The `features` column on the `BusinessCard` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `documents` column on the `BusinessCard` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BusinessCard" DROP COLUMN "features",
ADD COLUMN     "features" TEXT[],
DROP COLUMN "documents",
ADD COLUMN     "documents" TEXT[];
