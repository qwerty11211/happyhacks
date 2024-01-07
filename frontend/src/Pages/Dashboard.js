import React from "react";
import IndividualItem from "./HomePage/IndividualItem";

const Dashboard = () => {
   return (
      <div className='flex flex-col lg:flex-row'>
         <div className=' grow '>
            <IndividualItem />
         </div>
      </div>
   );
};

export default Dashboard;
