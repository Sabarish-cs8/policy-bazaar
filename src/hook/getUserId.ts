import prisma from "@/lib/prisma";

export const getUserId = async (email:string) =>{
try {
    const user =await prisma.user.findUnique({
        where:{
            email:email,
        }
    });

    if(user){
        console.log('User ID:', user.id);  
        return user.id;
      } else {
        console.log('User not found');
        return null;
      }
} catch (error) {
    console.error('Error fetching user:', error);
    return null;
}
}