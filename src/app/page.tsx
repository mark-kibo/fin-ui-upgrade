// "use client"
// import React, { useEffect, useState } from 'react';

// import { useParams } from 'next/navigation';
// import Link from 'next/link';

// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
// import Dashboard from '@/components/dashboards';

// const page = () => {
//   const { slug } = useParams();

//   useEffect(() => {
//     // Use slug here or access specific properties if 'slug' is an object
//     console.log(slug);
//   }, [slug]); // Re-run the effect whenever 'slug' changes

//   return (
//     <div style={{ height: "auto" }}>
//       <main className='min-h-screen bg-[#ededed] lg:mx-20 sm:mx-0'>

//         {/* our content  */}
//         {slug === undefined ? <Dashboard/>: ""}

//       </main>
//     </div>
//   );
// };

// export default page
import dashboard from "./dashboard/dashboard";

export default dashboard;
