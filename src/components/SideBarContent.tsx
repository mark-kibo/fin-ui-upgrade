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
    FinFinancials: <FinfinancialsIcon className="flex justify-center text-[#1F5780]" />,
    Inventory: <InventoryIcon className="flex justify-center text-[#1F5780]" />,
    "Fixed Assets": <FixedAssetsIcon className="flex justify-center text-[#1F5780]"/>,
    "File Tracker": <FileTrackerIcon className="flex justify-center text-[#1F5780]" />,
    "Human Resource": <HumanResourceIcon className="flex justify-center text-[#1F5780]"/>,
    Payroll: <PayrollIcon className="flex justify-center text-[#1F5780]"/>,
    "Global Administration": <GlobalAdministrationIcon className="flex justify-center text-[#1F5780]" />,
    "Consolidated Reports": <ConsolidatedReportsIcon className="flex justify-center text-[#1F5780]" />,
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
                <div className="mx-2 flex flex-col justify-between items-center cursor-pointer hover:text-gray-500 duration-100 transition ease-in-out" onClick={() => toggleSubmenu(menu.text)}>
                  <div className="flex w-full justify-between flex-row items-center py-2">
                    <div className="flex flex-row items-center">
                      {icons[menu.text]}
                      <p className={` font-semibold  pl-3 ml-2 text rounded md:bg-transparent  md:p-0 dark:text-white`}>{menu.text}</p>
                    </div>
                      
                      {openSubmenu === menu.text ? (
                        <HiChevronDown />
                      ) : (
                        <HiChevronDown style={{ transform: "rotate(270deg)" }} />
                      )}
                  </div>
                  
                      <Collapse in={openSubmenu === menu.text}>
                        {menu.childNodes.map(
                        (subEntry: { text: string; childNodes: Object[] }) => (
                          <SideNavRow
                            text={subEntry.text}
                            entries={subEntry.childNodes}
                            key={subEntry.text}
                          />
                        )
                      )}
                    </Collapse>
                  </div>
            ))}

    </div>
  );
};

export default SideBar;
