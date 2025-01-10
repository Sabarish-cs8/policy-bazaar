-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "officialEmail" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "monthlyIncome" DOUBLE PRECISION NOT NULL,
    "employmentType" TEXT NOT NULL,
    "companyLandline" BOOLEAN NOT NULL,
    "companyWebsite" BOOLEAN NOT NULL,
    "salaryConsistency" BOOLEAN NOT NULL,
    "creditCardDuration" TEXT NOT NULL,
    "missedPayments" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_officialEmail_key" ON "User"("officialEmail");
