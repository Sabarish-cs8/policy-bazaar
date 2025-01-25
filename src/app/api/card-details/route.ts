import prisma from "@/lib/prisma";
import { PlanTypeEnum } from "@prisma/client";


export async function POST (request:Request){
    try {
        const body = await request.json();
    
        const {
          icon,
          bankName,
          cardName,
          monthlyIncome,
          annualFees,
          features,
          rewards,
          benefits,
          annualFee,
          planType,
        } = body;
    
        // Validate incoming data
        if (
          !icon ||
          !bankName ||
          !cardName ||
          !monthlyIncome ||
          !annualFees ||
          !features ||
          !rewards ||
          !benefits ||
          !annualFee ||
          !planType
        ) {
          throw new Error('Missing required fields');
        }
        // Validate planType
    const validPlanTypes = Object.values(PlanTypeEnum);
    if (!validPlanTypes.includes(planType)) {
      throw new Error(`Invalid planType. Valid values are: ${validPlanTypes.join(', ')}`);
    }
        const newCard = await prisma.cardDetails.create({
            data: {
              icon,
              bankName,
              cardName,
              monthlyIncome,
              annualFees,
              features,
              rewards,
              benefits,
              annualFee,
              planType:planType as PlanTypeEnum,
            },
          });
      
          return new Response(JSON.stringify(newCard), { status: 201 });
        } catch (error: any) {
          console.error('❌ Error creating card:', error.message || error);
          return new Response(
            JSON.stringify({
              error: 'Failed to create card',
              details: error.message || 'Unknown error',
            }),
            { status: 500 }
          );
        }
      }
      

      export async function GET(){
        try {
          console.log("✅ API request received to fetch card details");

          const cards = await prisma.cardDetails.findMany();
      
          if (!cards || cards.length === 0) {
            console.warn("⚠️ No card details found");
            return new Response(
              JSON.stringify({ error: "No card details found" }),
              { status: 404 }
            );
          }
          return new Response(JSON.stringify(cards),{status:200});
        } catch (error:any) {
          console.error('❌ Error fetching card details:', error.message || error);
          return new Response(
            JSON.stringify({error:'Failed to fetch card details'}),
            {status:500}
          )
        }
      }




    //   export async function GET(request: Request) {
    //     try {
    //         console.log(" API request received to fetch card details");
    //         const url = new URL(request.url);
    //         const searchParams = url.searchParams;
    
    //         const bankName = searchParams.get('bank') || '';
    //         const features = searchParams.get('features') || '';
    //         const planType = searchParams.get('planType') || '';
    //         const rewardType = searchParams.get('rewardType') || '';
    
           
    //         const filterConditions: any = {};
    
    //         if (bankName) {
    //             filterConditions.bankName = { contains: bankName, mode: 'insensitive' }; 
    //         }
    //         if (features) {
    //             filterConditions.features = { has: features }; 
    //         }
    //         if (planType) {
         
    //             filterConditions.planType = planType as 'ShariahCompliant' | 'LifetimeFree';
    //         }
    //         if (rewardType) {
    //             filterConditions.rewards = { has: rewardType }; 
    //         }
    
         
    //         const cards = await prisma.cardDetails.findMany({
    //             where: filterConditions,
    //         });
    
    //         if (!cards || cards.length === 0) {
    //             console.warn("⚠️ No card details found");
    //             return new Response(
    //                 JSON.stringify({ error: "No card details found" }),
    //                 { status: 404 }
    //             );
    //         }
    //         return new Response(JSON.stringify(cards), { status: 200 });
    //     } catch (error: any) {
    //         console.error('❌ Error fetching card details:', error.message || error);
    //         return new Response(
    //             JSON.stringify({ error: 'Failed to fetch card details' }),
    //             { status: 500 }
    //         );
    //     }
    // }
    