"use client"
import React, { useContext, createContext, useEffect, useState } from "react";
import { MenuContent } from '../json/menu';
import axios from "axios";
import { baseUrl, frontUrl } from "@/utils/constants";

import { useSession } from "next-auth/react";
import { decryptRijndael } from "@/Encryption/encryptToken";


type Anchor = 'left';
export const SideBarContext = createContext<any>(null); // Set the initial context value to null or provide an appropriate initial state

interface SideBarProviderProps {
  children: React.ReactNode;
}


const SideBarProvider = ({ children }: SideBarProviderProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const [subContainer, setSubContainer] = useState(false);
    //Responsible for storing the subContainers entries
    const [subContainerEntries, setSubContainerEntries] = useState(null);
    //Responsible for holding all of the data that goes into the navbar
    const [finmenus, setFinMenus] = useState<Object []>();

    const{data:session}= useSession()
    
    const transformedSession = {
      user: {
        connectionString: session?.user.connectionString || "",
        userRole: session?.user.userRole || "",
        userName: session?.user.userName || "",
      },
    };
      
    useEffect(() => {
      
      if(session){
        const { connectionString, userRole, userName } = transformedSession.user;
        const headers ={
          "X-ConnectionString": decryptRijndael(connectionString),
          "X-UserRole": userRole,
          "X-Username": userName,
      }
      axios.get(baseUrl + "api/v1/profiles/modules",  {headers:headers})
      .then(res=>{
        console.log(res.data)
        setFinMenus(res.data)})
      .catch(e=>console.log(e))
      }
    }, [session]);

    const value = {
        subContainer,
        setSubContainer,
        subContainerEntries,
        setSubContainerEntries,
        finmenus,
        setFinMenus,
        setState,
        state
    }

  return (
    <>
      <SideBarContext.Provider value={value}>
        {children}
      </SideBarContext.Provider>
    </>
  ); 
};


export default SideBarProvider;
