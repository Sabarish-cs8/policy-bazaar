-- AlterTable
ALTER TABLE "CardDetails" ADD COLUMN     "applyLink" TEXT,
ADD COLUMN     "minimumIncome" INTEGER,
ADD COLUMN     "offers" TEXT[],
ALTER COLUMN "planType" SET DEFAULT 'ShariahCompliant';
