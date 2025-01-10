
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(re:NextApiRequest,res:NextApiResponse){
    try {
        const businessCards = await prisma.businessCard.findMany();
        res.status(200).json(businessCards);
    } catch (error) {
        console.log("error",error)
        res.status(500).json({ error: 'Error fetching business cards' });
    }
}