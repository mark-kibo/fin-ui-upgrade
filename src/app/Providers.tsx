"use client"
import {SessionProvider} from "next-auth/react"
import { ReactNode } from "react";




const Providers =({children}: { children: ReactNode })=>{// The `children` prop represents the content that will be wrapped by the SessionProvider.
    // Return the SessionProvider, wrapping the `children` within it.
    return(
        <SessionProvider>{children}</SessionProvider>
    )
}


export default Providers;