import { SideBarContext } from '@/context/SideBarContext';
import { ChevronRight } from '@mui/icons-material';
import React from 'react'
import { useContext } from 'react';


export default function SideNavRow(props) {
    const {setSubContainer, setSubContainerEntries} = useContext(SideBarContext);

    const openRow = () => {
        setSubContainer(true);
        setSubContainerEntries(props.entries);
    }

    return (
        <div className=" flex flex-row justify-between p-2 hover:bg-gray-400" onClick={() => (props.entries && openRow())}>
            <div>{props.text}</div>
            {props.entries && <ChevronRight/>}
        </div>
    );

}

