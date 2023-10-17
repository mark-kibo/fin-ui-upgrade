import { SideBarContext } from '@/context/SideBarContext';
import { ChevronRight } from '@mui/icons-material';
import React from 'react'
import { useContext } from 'react';

export default function SideNavRow(props: { entries: Object []; text: string ; }) {
    const {setSubContainer, setSubContainerEntries} = useContext(SideBarContext);

    const openRow = () => {
        setSubContainer(true);
        setSubContainerEntries(props.entries);
    }

    return (
        <div className="sidenavRow" onClick={() => (props.entries && openRow())}>
            <div>{props.text}</div>
            {props.entries && <ChevronRight/>}
        </div>
    );

}

