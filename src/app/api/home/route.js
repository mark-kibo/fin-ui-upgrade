import { NextResponse } from "next/server"
import axios from "axios"

const https=require('https')

export async function POST(request)  {
    const{userName, password}=await request.json()
    console.log(userName, password)
    const res=await axios.post("https://localhost:7279/api/v1/users/login", {
        userName:userName,
        password:password
    }, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })          
   
    return NextResponse.json(
        res.data, 
        
    )
 
}


