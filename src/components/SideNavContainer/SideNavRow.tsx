import { SideBarContext } from '@/context/SideBarContext';
import { ChevronRight } from '@mui/icons-material';
import React from 'react'
import { useContext } from 'react';
import style from "@/utils/css/layout.module.css";
export default function SideNavRow(props: { entries: Object []; text: string ; }) {
    const {setSubContainer, setSubContainerEntries} = useContext(SideBarContext);

    const openRow = () => {
        setSubContainer(true);
        setSubContainerEntries(props.entries);
    }

    return (
        <div className=" flex flex-row justify-between p-2 cursor-pointer ml-10 hover:bg-gray-400" onClick={() => (props.entries && openRow())}>

            <div className={`${style.heading2} p-2`}>{props.text}</div>

            {props.entries && <ChevronRight/>}

        </div>
    );

}

