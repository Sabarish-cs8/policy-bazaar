export const fetchUser = async (id:string) => {
    const res = await fetch(`/api/user?id=${id}`);
    return res.json();
}

export const createUser = async (userData:any) => {
    const res = await fetch('/api/user',{
        method:'POST',
        headers:{'content-Type' : 'application/json'},
        body:JSON.stringify(userData),
    })
    return res.json()
}

