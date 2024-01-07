import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { set_access_token } from "./../utils/accessToken";

function IndividualItem() {
   let [campaign, setcampaign] = useState([]);

   useEffect(() => {
      set_access_token();
      getcampaign();
   }, []);

   let getcampaign = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/campaigns/`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (response.status === 200) {
         setcampaign(response.data);
      }
      console.log("data", response.data);
   };
   let filterBtn = async () => {
      let result = await axios.get(`http://127.0.0.1:8000/campaigns/filter/NGO`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (result.status === 200) {
         console.log("data", result.data);
      }
   };

   return (
      <>
         <div className='flex flex-col md:flex-row justify-between px-3 mt-3'>
            <h2 className='text-xl text-white font-semibold'>Recent</h2>

            {/* <div className='inline-flex space-x-3 '>
               {["StartUp", "Medical", "Disaster", "Sport"].map((text, index) => (
                  <div className=''>
                     <button onClick={filterBtn} className={` ${index ? "text-zinc-500" : "text-fuchsia-600 underline font-bold"}`}>
                        {text}
                     </button>
                  </div>
               ))}
               ;
            </div> */}
         </div>
         <br />
         <ul className='p-1.5 flex flex-wrap'>
            {campaign.map((data) => (
               <>
                  {" "}
                  <li className='w-full lg:w-1/2 xl:w-1/3  p-3 ' key={data.id}>
                     <Link to={`/campaign/${data.id}`}>
                        <div className='w-full h-64 bg-center bg-cover relative' style={{ backgroundImage: `url(${data.images})`, borderRadius: "4%" }}>
                           <div className='absolute left-1/2 -translate-x-1/2 bottom-1  w-5/6 bg-white rounded-md flex items-center bg-opacity-30 backdrop-blur-md' style={{ bottom: "-5%", zIndex: 100 }}>
                              <div className='w-1/2 p-3'>
                                 <h3 className='font-semibold'>Target Amount</h3>
                                 <div className=''>{data.target_amount} ETH</div>
                              </div>
                              <div className='w-1/2 p-3'>
                                 <h3 className='font-semibold'>Ending in</h3>
                                 <Countdown date={Date.now() + parseInt((new Date(data.end_date).getTime() / 1000).toFixed(0))} renderer={({ hours, minutes, seconds }) => <div className=''>{`${hours}h: ${minutes}m: ${seconds}s`}</div>} />
                              </div>
                           </div>
                        </div>
                        <div className='individualcampaign '>
                           <span>
                              {" "}
                              <h2 className='font-semibold text-center  text-lg px-3 mt-2 text-3xl' style={{ color: "white", fontSize: "22px" }}>
                                 {data.name} <span style={{ float: "right" }}> {data.is_verified && <img src='https://cdn-icons-png.flaticon.com/512/6269/6269646.png' height='20' width='20' />}</span>
                              </h2>
                           </span>
                           <div className='flex items-center px-3 mt-2'>
                              <span className=' ml-2 text-zinc-400'>#{data.type}</span>
                              <span className='flex items-center  ml-10 '>
                                 <span>
                                    {" "}
                                    <img src='https://user-images.githubusercontent.com/43414928/175196130-2a4500a9-2231-4fb4-a406-a44a29ee4598.png' className='w-4 h-4' alt='item-owner' />
                                 </span>
                                 <span className='text-zinc-100 '> {data.likes} likes</span>
                              </span>
                           </div>
                           <br />
                           <div class='mb-1 text-base text-white'>
                              <pre>
                                 <strong> {data.current_amount}</strong> INR raised {(data.current_amount / data.target_amount) * 100}%
                              </pre>
                           </div>
                           <div class='  w-65 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                              <div class='bg-gradient-to-tr from-fuchsia-600 to-violet-600    h-2.5 rounded-full dark:bg-gray-300' style={{ width: (data.current_amount / data.target_amount) * 10 + "rem" }}></div>
                           </div>
                        </div>
                     </Link>
                  </li>
               </>
            ))}
         </ul>
      </>
   );
}

export default IndividualItem;
