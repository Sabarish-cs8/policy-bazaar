-- CreateTable
CREATE TABLE "BusinessCard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "eligibility" JSONB NOT NULL,
    "documents" JSONB NOT NULL,

    CONSTRAINT "BusinessCard_pkey" PRIMARY KEY ("id")
);
