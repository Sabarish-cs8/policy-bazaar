import { UserDetails } from "@/utils/userUtils";
import { useEffect, useState } from "react";

export const useGetAllUserInformation =() =>{
    const [users, setUsers] = useState<UserDetails[]>([]);
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
            const response = await fetch('/api/user');
   if(response.ok){
    const data = await response.json();
    setUsers(data);
   }else{
    console.log("Failed to fetch users")
   }
        }
     catch (error){
            console.error('Error fetching users:', error);
        }
    }
        fetchUsers();
    },[])
    console.log("all users",users)

    return{
        users,
    }
    }
