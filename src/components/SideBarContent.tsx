"use client";
import React, { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import SubSideBar from "./SideNavContainer/Subcontainer";
import { SideBarContext } from "@/context/SideBarContext";
import { ChevronRight } from "@mui/icons-material";
import SideNavRow from "./SideNavContainer/SideNavRow";
import style from "@/utils/css/layout.module.css";
import { HiChevronDown } from "react-icons/hi";

//level 0 menu icons
import FinfinancialsIcon from "@mui/icons-material/AccountBalance";
import InventoryIcon from "@mui/icons-material/Inventory";
import FixedAssetsIcon from "@mui/icons-material/AccountBalanceWallet";
import FileTrackerIcon from "@mui/icons-material/Description";
import HumanResourceIcon from "@mui/icons-material/PeopleAlt";
import PayrollIcon from "@mui/icons-material/AttachMoney";
import GlobalAdministrationIcon from "@mui/icons-material/Settings";
import ConsolidatedReportsIcon from "@mui/icons-material/Assessment";
interface MenuData {
  title: string;
}

const SideBar: React.FC = () => {
  const { finmenus, setSubContainer, setSubContainerEntries } =
    useContext(SideBarContext);
  // level 0 icon
  const icons: Record<string, React.ReactElement> = {
    FinFinancials: <FinfinancialsIcon  />,
    Inventory: <InventoryIcon />,
    "Fixed Assets": <FixedAssetsIcon />,
    "File Tracker": <FileTrackerIcon />,
    "Human Resource": <HumanResourceIcon />,
    Payroll: <PayrollIcon />,
    "Global Administration": <GlobalAdministrationIcon />,
    "Consolidated Reports": <ConsolidatedReportsIcon />,
  };

  // Specify the menus to display when landing on the dashboard
  const initialMenusToDisplay = [
    "FinFinancials",
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
        {finmenus &&
          finmenus
            .filter((menu: { text: string }) =>
              menusToDisplay.includes(menu.text)
            )
            .map((menu: { [x: string]: any; text: string }) => (
              // <div className="mx-4  mb-4" key={menu.text}>
              //   <ListItemButton onClick={() => toggleSubmenu(menu.text)}>
              //     {/* <div className={`${style.heading} cursor-pointer flex justify-center items-center bg-white border-gray-200 dark:bg-gray-900`}>
              //       <p className="pr-2">{icons[menu.text]}</p>
              //       {menu.text}
              //    </div> */}
                
              //     <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              //       <li className="flex items-center justify-center">
              //         <p className="justify-center">{icons[menu.text]}</p>
              //         <p className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">{menu.text}</p>
              //       </li>
                   
              //     </ul>

              //     {/* check whether openedSubmenu matches menu.text for arrow action  */}
              //     {openSubmenu === menu.text ? (
              //       <HiChevronDown />
              //     ) : (
              //       <HiChevronDown style={{ transform: "rotate(270deg)" }} />
              //     )}
              //   </ListItemButton>
              //   <Collapse in={openSubmenu === menu.text}>
              //     {menu.childNodes.map(
              //       (subEntry: { text: string; childNodes: Object[] }) => (
              //         <SideNavRow
              //           text={subEntry.text}
              //           entries={subEntry.childNodes}
              //           key={subEntry.text}
              //         />
              //       )
              //     )}
              //   </Collapse>
              // </div>
                <div className="my- mx-2 flex justify-between">
                  <div className="flex justify-center items-center py-2">
                      {icons[menu.text]}
                      <p className={`${style.heading2} flex items-center cursor-pointer py-2 pl-3 pr-4  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}>{menu.text}</p>
                  </div>
                  {openSubmenu === menu.text ? (
                    <HiChevronDown />
                  ) : (
                    <HiChevronDown style={{ transform: "rotate(270deg)" }} />
                  )}
                  </div>
            ))}

    </div>
  );
};

export default SideBar;
