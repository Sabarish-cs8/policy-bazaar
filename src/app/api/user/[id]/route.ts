
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";


    export async function PUT(request:NextRequest){
        try {
           // const {officialEmail}=await request.json();
            const {pathname} = new URL(request.url);
            const userId = pathname.split('/').pop();
            if (!userId ) {
                return new Response(
                    JSON.stringify({ error: 'UserId is required' }),
                    { status: 400 }
                );
            }
            const payload = await request.json();
            console.log("Payload received in API:", payload);

            if(!payload || Object.keys(payload).length === 0){
                return new Response(
                    JSON.stringify({ error: "At least one field is required to update" }),
                    { status: 400 }
                  );
            }

            const validFields = [
                "officialEmail",
                "city",
                "nationality",
                "name",
                "email",
                "phoneNumber",
                "monthlyIncome",
                "employmentType",
                "companyLandline",
                "companyWebsite",
                "salaryConsistency",
                "creditCardDuration",
                "missedPayments",
              ];

              const updateData = Object.keys(payload)
              .filter((key)=> validFields.includes(key))
              .reduce((obj, key)=>{
                if(key === "monthlyIncome"){
                  obj[key] = parseFloat(payload[key]);
                } else if (key === "companyLandline" || key === "companyWebsite" || key === "missedPayments" || key === "salaryConsistency"){
                  obj[key]= payload[key] === "YES" ? true : false;
                }else{

                  obj[key]=payload[key];
                }
                return obj;
              },{});

              if(Object.keys(updateData).length === 0 ){
                return new Response(
                  JSON.stringify({ error: "No valid fields to update" }),
                  { status: 400 }
                );
              }
              const updatedUser = await prisma.user.update({
                where:{id:userId},
                data:updateData,
            });
            return new Response(
                JSON.stringify({message: "User details updated successfully", data: updatedUser, }),
                {status:200}
            )
        } catch (error:any) {
            console.error("Error updating user details:", error);

            return new Response(
                JSON.stringify({
                    error:"Failed to update user details",
                    details: error.message || 'Unknown error',
                }),
                { status: 500 }
            )
            
        }
    }


    export async function GET(request:NextRequest){
        try {
            const {pathname}=new URL(request.url);
            const userId =pathname.split('/').pop();

            if(!userId){
                return new Response(
                  JSON.stringify({ error: 'UserId is required' }),
                  { status: 400 }
                );
              }
            const user = await prisma.user.findUnique({
                where:{id:userId},
            })
            if(!user){
                return new Response(
                    JSON.stringify({error:'user not found'}),
                    {status:404}
                );
            }
            return new Response(JSON.stringify(user),{status:200});
        } catch (error:any) {
            console.error('❌ Error fetching user details:', error.message || error);
          return new Response(
            JSON.stringify({error:'Failed to fetch user details'}),
            {status:500}
          )
        }
      }