import React from "react";
import AboutUsHeader from "./AboutUsHeader";
import SidebarLeft from "./Sidebar";
import { Outlet } from "react-router-dom";

import "./homepage.css";

const Dashboard = () => {
   return (
      <>
         <SidebarLeft />

         <div className='flex flex-col md:flex-row'>
            <div className='w-48 hidden lg:block shrink-0' />
            <div className=' grow '>
               <AboutUsHeader />
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default Dashboard;
