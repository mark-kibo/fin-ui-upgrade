import { SideBarContext } from '@/context/SideBarContext';
import { ChevronRight } from '@mui/icons-material';
import React from 'react'
import { useContext } from 'react';
import style from "@/utils/css/layout.module.css";
import Link from 'next/link';
import { dialogClasses } from '@mui/material';
export default function SideNavRow(props: { entries: Object []; text: string ; }) {
    const {setSubContainer, setSubContainerEntries} = useContext(SideBarContext);

    const openRow = () => {
        setSubContainer(true);
        setSubContainerEntries(props.entries);
    }

    return (
        // <div className=" flex flex-row justify-between p-2 cursor-pointer ml-10 hover:bg-gray-400" onClick={() => (props.entries && openRow())}>

        //     <div className={`${style.heading2} pb-1`}>
        //         {props.entries ? props.text : (
        //             <Link href="/" onClick={setSubContainer(false)}>
        //                 {props.text}
        //             </Link>
        //         ) }</div>

        //     {<ChevronRight/>}

        // </div>
        
            props.entries.length > 0 ? (

            //         <div className=" flex flex-row justify-between p-2 cursor-pointer ml-10 hover:bg-gray-400" onClick={() => (props.entries && openRow())}>

            //     <div className={`${style.heading2} pb-1`}>
            //         {props.entries ? props.text : (
            //             <Link href="/" onClick={setSubContainer(false)}>
            //                 {props.text}
            //             </Link>
            //         ) }</div>

            //     {<ChevronRight/>}

            // </div>
            <div className='bg-white border-gray-200 dark:bg-gray-900'>

            </div>
                
            ) : (
                // 
               
                   "me"
                ) 
            
        
    );

}

