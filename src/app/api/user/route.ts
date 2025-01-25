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


    export async function GET(){
        try {
            console.log("✅ API request received to fetch user details");
            const users = await prisma.user.findMany();
            if (!users || users.length === 0) {
                console.warn("⚠️ No users details found");
                return new Response(
                  JSON.stringify({ error: "No users details found" }),
                  { status: 404 }
                );
              }
            return new Response(JSON.stringify(users),{status:200});
        } catch (error:any) {
            console.error('❌ Error fetching user details:', error.message || error);
            return new Response(
              JSON.stringify({error:'Failed to fetch user details'}),
              {status:500}
            )
          }
    }