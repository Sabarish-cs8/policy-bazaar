/*
  Warnings:

  - Added the required column `planType` to the `CardDetails` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PlanTypeEnum" AS ENUM ('ShariahCompliant', 'LifetimeFree');

-- AlterTable
ALTER TABLE "CardDetails" ADD COLUMN     "planType" "PlanTypeEnum" NOT NULL;
