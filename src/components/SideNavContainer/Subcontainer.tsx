
import React, { useContext } from 'react'

import { ChevronLeft } from '@mui/icons-material';
import { SideBarContext } from '@/context/SideBarContext';
import SideNavRow from './SideNavRow';



const SubSideBar = () => {

  const { subContainerEntries, setSubContainer, setSubContainerEntries } = useContext(SideBarContext);


  return (
    <div >

            <div className="bg-gray-200 text-center hover:bg-gray-400  p-2  flex " onClick={() => setSubContainer(false)}>

            <ChevronLeft/>MAIN MENU

            </div>

           

            {subContainerEntries.map((subEntry: { id: number| null | undefined; label: string; submenu: Object[]; }) => (

               

            <>

     

              {/* <div className='p-4'>{!subEntry.submenu && subEntry.label}</div> */}

             

               

                  <SideNavRow key={subEntry.id} text={subEntry.label} entries={subEntry.submenu}/>

               

           

               

              </>

         

               

            ))}

        </div>
  )
}

export default SubSideBar
