-- CreateTable
CREATE TABLE "CardDetails" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "cardName" TEXT NOT NULL,
    "monthlyIncome" DOUBLE PRECISION NOT NULL,
    "annualFees" TEXT NOT NULL,
    "features" TEXT[],
    "rewards" TEXT[],
    "benefits" TEXT[],
    "annualFee" TEXT[],

    CONSTRAINT "CardDetails_pkey" PRIMARY KEY ("id")
);
