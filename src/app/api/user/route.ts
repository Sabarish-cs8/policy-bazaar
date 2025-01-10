import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";


export  async function POST(request:NextRequest){
    try {
        const body = await request.json();
        console.log("Request Body",body)
        const {
            name,
            email,
            phoneNumber,
            city,
            nationality,
            employmentType,
            companyLandline,
            companyWebsite,
            salaryConsistency,
            creditCardDuration,
            missedPayments,
            MonthlyIncome,
        } =body

        if (!city || !nationality || !name || !email || !phoneNumber) {
            throw new Error('Missing required fields');
          }

        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                phoneNumber,
                city,
                nationality,
                employmentType,
                companyLandline,
                companyWebsite,
                salaryConsistency,
                creditCardDuration,
                missedPayments,
                monthlyIncome:parseFloat(MonthlyIncome),
            }
        })
        return new Response(
            JSON.stringify({message:'User Created Successfully',user:newUser}),
                { status: 201 }
            );
    } catch (error:any) {
        console.error('Error saving user:', error.message || error);
        return new Response(
            
            JSON.stringify({ 
                error: 'Failed to create user',
                details:error.message || 'unknown error',
             }),
              { status: 500 }
        );
      } 
    }

    export async function PUT(request:NextRequest){
        try {
            const {userId,officialEmail}=await request.json()
            if (!userId || !officialEmail) {
                return new Response(
                    JSON.stringify({ error: 'UserId and officialEmail are required' }),
                    { status: 400 }
                );
            }
            await prisma.user.update({
                where:{id:userId},
                data:{officialEmail},
            });
            return new Response(
                JSON.stringify({message: "Email updated successfully" }),
                {status:200}
            )
        } catch (error:any) {
            console.error("Error updating email:", error);

            return new Response(
                JSON.stringify({
                    error:"Failed to update email",
                    details: error.message || 'Unknown error',
                }),
                { status: 500 }
            )
            
        }
    }