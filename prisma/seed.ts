import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.businessCard.createMany({
    data:[ 
        {
            name: "Emirates NBD Business Credit Card",
            features:[
              "Get up to AED 2,000 as Plus Points each month",
              "Plus Points credited to your account on both primary and supplementary card transactions",
              "5% discount on hotels with a limit of 400 points each month",
              "2% discount on international transactions (capped at 1,000 points) each month",
              "1% discount on government services, including utility bill payments, petrol, and DED transactions with a limit of AED 300 each month",
              "0.5% discount on supermarket purchases, groceries, and more (up to 300 points) each month  ",
              "Encash up to 75% of your credit limit at branches and ATMs globally",
            ],
            eligibility:{
              age: "21+",
              nationality: "UAE National or Expat",
            },
            documents:[
              "Emirates ID and/or Passports of the concerned signatories",
              "Residence visa (applicable to expats)",
              "Trade Licence",
              "Address proof",
              "Certificate of Commercial Registration",
              "Memorandum of Association",
              "Power of Attorney (if applicable)",
              "Company Profile and Bank Reference Letter (if applicable)",
            ],
          },
          {
            name: "Commercial Bank of Dubai Business Credit Card",
            features:[
              "Free-for-life credit card with a limit of up to AED 250,000",
              "Cash advance facility (up to 50% of credit limit) ",
              "Availability of interest-free credit period of up to 52 days",
              "Exclusive lifestyle offers such as free valet parking, complimentary airport lounge access, movie ticket discounts, and more",
              "Other benefits include complimentary multi-trip travel insurance and CBD Rewards Points",
            ],
            eligibility: {
              age: "21+",
              nationality: "UAE National or Expat",
            },
            documents: [
              "Emirates ID and/or Passports of the concerned signatories",
              "Residence visa (applicable to expats)",
              "Trade Licence",
              "Address proof",
              "Certificate of Commercial Registration",
              "Memorandum of Association",
              "Power of Attorney (if applicable)",
              "Company Profile and Bank Reference Letter (if applicable)",
            ],
        },
        {
          name: "RAKBANK Titanium Business Credit Card",
          features: [
            "This is a free-for-life card",
            "Cash advance of up to 90% of your credit limit Cashback on retail purchases, travel and insurance benefits",
            "High credit limit",
            "Optional Credit Shield feature",
            "Issuance of additional Business Titanium credit cards for authorised employees",
            "Earn cashback on domestic and international retail spending",
          ],
          eligibility: {
            age: "21+",
            nationality: "UAE National or Expat",
          },
          documents: [
            "Emirates ID and/or Passports of the concerned signatories",
            "Residence visa (applicable to expats)",
            "Trade Licence",
            "Address proof",
            "Certificate of Commercial Registration",
            "Memorandum of Association",
            "Power of Attorney (if applicable)",
            "Company Profile and Bank Reference Letter (if applicable)",
          ],
        },
        {
            name: "Emirates Islamic Bank Business Card",
            features:[
              "The card is globally accepted.",
              "Utilise the card for utility bill payments, business, dining, and travel purposes",
              "Unlimited free access to more than 750 airport lounges globally",
              "Earn EI SmartMiles on all purchases",
              "Redeem earned points on retail transactions, hotel, and flights",
              "Balance transfer facility for other bank cards",
              "Availability of cash-on-call facility",
            ],
            eligibility: {
              age: "21+",
              nationality: "UAE National or Expat",
            },
            documents: [
              "Emirates ID and/or Passports of the concerned signatories",
              "Residence visa (applicable to expats)",
              "Trade Licence",
              "Address proof",
              "Certificate of Commercial Registration",
              "Memorandum of Association",
              "Power of Attorney (if applicable)",
              "Company Profile and Bank Reference Letter (if applicable)",
            ],
        },
        {
            name: "Abu Dhabi Commercial Bank Business Platinum Credit Card",
            features: [
              "1% cashback on each business purchase",
              "Complimentary access to premium airport lounges (3 times a year)",
              "‘Buy 1 Get 1’ offers on premium spas and fine dining across Africa and the Middle East",
             "Other features — Credit Shield, interest-free balance transfer, and cash loans from your balance",
            ],
            eligibility: {
              age: "21+",
              nationality: "UAE National or Expat",
            },
            documents: [
              "Emirates ID and/or Passports of the concerned signatories",
              "Residence visa (applicable to expats)",
              "Trade Licence",
              "Address proof",
              "Certificate of Commercial Registration",
              "Memorandum of Association",
              "Power of Attorney (if applicable)",
              "Company Profile and Bank Reference Letter (if applicable)",
            ],
        },
]    
  });

  console.log("Data seeded!");
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
