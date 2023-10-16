
export async function POST(data: any)  {
    const res=await fetch("https://localhost:7279/api/v1/users/login", {
       
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
            },
        body:JSON.stringify(data)
    })

    return res.json()
 
}


