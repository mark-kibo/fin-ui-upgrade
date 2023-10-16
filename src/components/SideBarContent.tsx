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

import { ChevronRight } from '@mui/icons-material';

import SideNavRow from "./SideNavContainer/SideNavRow";
import style from "@/utils/css/layout.module.css";
import { HiChevronDown } from "react-icons/hi";

import FinfinancialsIcon from '@mui/icons-material/AccountBalance';
import InventoryIcon from '@mui/icons-material/Inventory';
import FixedAssetsIcon from '@mui/icons-material/AccountBalanceWallet';
import FileTrackerIcon from '@mui/icons-material/Description';
import HumanResourceIcon from '@mui/icons-material/PeopleAlt';
import PayrollIcon from '@mui/icons-material/AttachMoney';
import GlobalAdministrationIcon from '@mui/icons-material/Settings';
import ConsolidatedReportsIcon from '@mui/icons-material/Assessment';








interface MenuData {



  title: string;



}







const SideBar: React.FC = () => {



  const { entryStore, setSubContainer, setSubContainerEntries } = useContext(SideBarContext);



  // level 0 icons
  const icons = {
    'Finfinancials': <FinfinancialsIcon />,
    'Inventory': <InventoryIcon />,
    'Fixed Assets': <FixedAssetsIcon />,
    'File Tracker': <FileTrackerIcon  />,
    'Human Resource': <HumanResourceIcon />,
    'Payroll': <PayrollIcon />,
    'Global Administration': <GlobalAdministrationIcon/>,
    'Consolidated Reports': <ConsolidatedReportsIcon />,
  };



  // Specify the menus to display when landing on the dashboard



  const initialMenusToDisplay = [



    "Finfinancials",



    "Inventory",



    "Fixed Assets",



    "File Tracker",



    "Human Resource",



    "Payroll",



    "Global Administration",



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



                  <h2 className={`${style.heading} p-3  cursor-pointer flex justify-center items-center`}>
                   {/* {menu.icon} */}
                   <div className="pr-2">{icons[menu.label]}</div>
                    {menu.label}</h2>

                  {/* check whether openedSubmenu matches menu.label for arrow action  */}

                  {openSubmenu === menu.label ? ( 
                    <HiChevronDown  />
                       ) : (
                           <HiChevronDown style={{ transform: "rotate(270deg)" }} />
            )}

                </ListItemButton>



                <Collapse in={openSubmenu === menu.label}>



                  {menu.submenu.map(subEntry => (




                    <SideNavRow classname ={`${style.heading2}`} text={subEntry.label} entries={subEntry.submenu} key={subEntry.label} />
                    



                  ))}



                </Collapse>







              </div>



            ))}



      </List>



    </div>



  );



};







export default SideBar;