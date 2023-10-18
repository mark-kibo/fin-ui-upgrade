"use client"
import {SessionProvider} from "next-auth/react"
import { ReactNode } from "react";




const Providers =({children})=>{
    return(
        <SessionProvider>{children}</SessionProvider>
    )
}


export default Providers;