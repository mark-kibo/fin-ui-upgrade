import React, { useContext, createContext, useEffect, useState } from "react";
import { MenuContent } from '../json/menu';


type Anchor = 'left';
export const SideBarContext = createContext<any>(null); // Set the initial context value to null or provide an appropriate initial state

interface SideBarProviderProps {
  children: React.ReactNode;
}

const SideBarProvider = ({ children }: SideBarProviderProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  console.log(state)

  const [subContainer, setSubContainer] = useState(false);
    //Responsible for storing the subContainers entries
    const [subContainerEntries, setSubContainerEntries] = useState(null);
    //Responsible for holding all of the data that goes into the navbar
    const [entryStore, setEntryStore] = useState(null);

    
    useEffect(() => {
        // fetch("http://200126984.cs2410-web01pvm.aston.ac.uk/react-amazon-navbar/").then(data => data.json()).then(response => {
        //     setEntryStore(response);
        // })
        setEntryStore(MenuContent);
    }, []);

    const value = {
        subContainer,
        setSubContainer,
        subContainerEntries,
        setSubContainerEntries,
        entryStore,
        setEntryStore,
        setState,
        state
    }

  return (
    <div>
      <SideBarContext.Provider value={value}>
        {children}
      </SideBarContext.Provider>
    </div>
  );
};


export default SideBarProvider;
