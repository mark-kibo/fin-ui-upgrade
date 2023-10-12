import { ChevronRight } from '@mui/icons-material';
import React from 'react'
import { useContext } from 'react';
import { SidebarContext } from 'react-pro-sidebar';

export default function SideNavRow(props) {
    const {setSubContainer, setSubContainerEntries} = useContext(SidebarContext);

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

