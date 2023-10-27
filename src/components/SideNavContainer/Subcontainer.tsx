import React, { useContext } from "react";

import { ChevronLeft } from "@mui/icons-material";
import { SideBarContext } from "@/context/SideBarContext";
import SideNavRow from "./SideNavRow";
import style from "@/utils/css/layout.module.css";

const SubSideBar = () => {
  const { subContainerEntries, setSubContainer, setSubContainerEntries } =useContext(SideBarContext);
  return (
    <>
      <div
        className={`${style.heading} flex items-center mb-2 justify-start
         cursor-move`}
        onClick={() => setSubContainer(false)}
      >
        <ChevronLeft />
        <span className=" flex-grow">MAIN MENU</span>
      </div>

      {subContainerEntries &&
        subContainerEntries.map(
          (
            subEntry: {
              id: number | null | undefined;
              text: string;
              childNodes: Object[];
            },
            index: number
          ) => (
            <>
              {/* <div className='p-4'>{!subEntry.submenu && subEntry.label}</div> */}

              <SideNavRow
                key={index}
                text={subEntry.text}
                entries={subEntry.childNodes}
              />
            </>
          )
        )}
    </>
  );
};

export default SubSideBar;
