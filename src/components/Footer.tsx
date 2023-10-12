import React from 'react';

 

export const Footer = () => {

  return (

    <div className='bg-[#ededed] shadow-md m-auto p-4 w-full bottom-0  z-10'>
      <div className="flex flex-col">
            <div className="flex items-center justify-center md:flex-col md:justify-center md:items-center md:w-full sm:text-2">
             <p className='capitalize text-[#1F5780] text-base sm:text-sm'>Data integrations technologies</p>
             <span className='pl-2 sm:pl-0'><p className='text-sm'>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</p></span> 
            </div>
      </div>
    
    </div>
    

  );

};

 

