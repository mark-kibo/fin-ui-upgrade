import { NextResponse } from "next/server"
import axios from "axios"
export async function POST(request)  {
    const{userName, password}=await request.json()
    // console.log(userName)
    const res=await axios.post("https://localhost:7279/api/v1/users/login",
    {
        userName: userName,
        password: password
      })          
   
    return NextResponse.json(
        {"data":res.data}
    )
 
}


