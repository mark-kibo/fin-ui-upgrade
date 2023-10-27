import { SideBarContext } from "@/context/SideBarContext";
import React from "react";
import { useContext } from "react";
import style from "@/utils/css/layout.module.css";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
export default function SideNavRow(props: { entries: Object[]; text: string }) {
  const { setSubContainer, setSubContainerEntries, state, setState } =
    useContext(SideBarContext);

  const openRow = () => {
    setSubContainer(true);
    setSubContainerEntries(props.entries);
  };

  return (
//    this handles displaying of all the menu labels starting from level 1


    props.entries.length > 0 ? (
        // if there are submenus dipslay text and a right icon
      <div
        className=" flex flex-row justify-between p-2 cursor-pointer ml-5"
        onClick={() => props.entries && openRow()}
      >
        <div
          className={`${style.heading2} flex flex-row justify-between items-center w-full `}
        >
          
            
              {props.text}
          
         

          {<HiChevronRight />}
        </div>
      </div>
    ) : (
      // if no submenu display the menu label as  a link
      <div className=" flex flex-row justify-between p-2 cursor-pointer ml-5">
        <div
          className={`${style.heading2} flex flex-row justify-between items-center w-full `}
        >
          <Link
            href="/"
            onClick={() => {
              setState({ ...state, ["left"]: false });
              setSubContainer(false);
            }}
          >
            <p className="mb-4">{props.text}</p>
          </Link>
        </div>
      </div>
    )
  );
}
