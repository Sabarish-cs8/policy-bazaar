import prisma from "@/lib/prisma";

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
          !annualFee
        ) {
          throw new Error('Missing required fields');
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
          const cards = await prisma.cardDetails.findMany();
          return new Response(JSON.stringify(cards),{status:200});
        } catch (error:any) {
          console.error('❌ Error fetching card details:', error.message || error);
          return new Response(
            JSON.stringify({error:'Failed to fetch card details'}),
            {status:500}
          )
        }
      }