import React, { useContext, useEffect, useState } from "react";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";

import ListItemButton from "@mui/material/ListItemButton";

import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";

import InboxIcon from "@mui/icons-material/MoveToInbox";

import MailIcon from "@mui/icons-material/Mail";

import Collapse from "@mui/material/Collapse";

import StarBorder from "@mui/icons-material/StarBorder";

import SubSideBar from "./SideNavContainer/Subcontainer";

import { SideBarContext } from "@/context/SideBarContext";

import SideNavRow from "./SideNavContainer/SideNavRowcopy";

 

interface MenuData {

  title: string;

}

 

const SideBar: React.FC = () => {

  const { entryStore, setSubContainer, setSubContainerEntries } = useContext(SideBarContext);

 

  // Specify the menus to display when landing on the dashboard

  const initialMenusToDisplay = [

    "Finfinancials",

    "Inventory",

    "File Tracker",

    "Human Resource",

    "Payroll",

    "Global Administartion",

    "Consolidated Reports",

  ];

 

  // Create state to store the menus to display and the open/closed state of submenus

  const [menusToDisplay, setMenusToDisplay] = useState(initialMenusToDisplay);

  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

 

  // Function to toggle the submenu

  const toggleSubmenu = (menuLabel: string) => {

    if (openSubmenu === menuLabel) {

      setOpenSubmenu(null);

    } else {

      setOpenSubmenu(menuLabel);

    }

  };

 

  return (

    <div>

      <List>

        {entryStore &&

          entryStore

            .filter(menu => menusToDisplay.includes(menu.label))

            .map(menu => (

              <div className="mx-4 " key={menu.label}>

                <ListItemButton onClick={() => toggleSubmenu(menu.label)}>

                  <ListItemText primary={menu.label} />

                </ListItemButton>

                <Collapse in={openSubmenu === menu.label}>

                  {menu.submenu.map(subEntry => (

                    <SideNavRow text={subEntry.label} entries={subEntry.submenu} key={subEntry.label} />

                  ))}

                </Collapse>

       

              </div>

            ))}

      </List>

    </div>

  );

};

 

export default SideBar;