import { getServerSession } from "next-auth/next"
import { options } from "../auth/[...nextauth]/options"
import { NextResponse } from "next/server"
import { baseUrl } from "@/utils/constants"
import { decryptRijndael } from "@/Encryption/encryptToken"


export async function GET(req, res) {
    const session = await getServerSession(options)
    const headers ={
        "X-ConnectionString": decryptRijndael(session?.user?.connectionString),
        "X-UserRole": session?.user?.userRole,
        "X-Username": session?.user?.userName,
    }
    // console.log(session?.user?.token)
    if (session?.user) {
        const res = await axios.get(baseUrl + "api/v1/profiles/modules", { headers:headers})
        if (res.status == 200) {
            return res.data
        } else {
            return new NextResponse({
                statusCode: 403,
                message: "data not found"
            })
        }
        
    }
    //     

    //     console.log(res)

    //     if (res.status == 200) {
    //         return res.data
    //     } else {
    //         return NextResponse({
    //             statusCode: 403,
    //             message: "data not found"
    //         })
    //     }

    // }
    return new NextResponse({
        statusCode: 400
    })
// fetch menus
   
}