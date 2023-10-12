import { SideBarContext } from '@/context/SideBarContext';
import React, { useContext } from 'react'
import SideNavRow from '@/components/SideNavContainer/SideNavRowcopy'
import { ChevronLeft } from '@mui/icons-material';
const SubSideBar = () => {

  const {subContainerEntries, setSubContainer, setSubContainerEntries} = useContext(SideBarContext);
  
  
  return (
      <div >
            <div className="bg-gray-200 text-center hover:bg-gray-400  p-2  flex " onClick={() => setSubContainer(false)}>
            <ChevronLeft/>MAIN MENU
            </div>
            
            {subContainerEntries.map(subEntry => (
                
            <>
      
              {/* <div className='p-4'>{!subEntry.submenu && subEntry.label}</div> */}
              
               
                  <SideNavRow key={subEntry.id} text={subEntry.label} entries={subEntry.submenu}/>
                
           
                
              </> 
          
                
            ))}
        </div>
  )
}

export default SubSideBar
