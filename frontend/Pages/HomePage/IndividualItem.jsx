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

   return (
      <>
         <br />
         <ul className='videos'>
            {campaign.map((data) => (
               <li className='video w-full  p-3' key={data.id}>
                  <Link to={`/campaign/${data.id}`}>
                     <div className='video video-content relative'>
                        <img src={data.images} alt='' />

                        <div className='video-time'>
                           <h3 className='font-semibold'>Ending in</h3>
                           <Countdown date={Date.now() + parseInt((new Date(data.end_date).getTime() / 1000).toFixed(0))} renderer={({ hours, minutes, seconds }) => <div>{`${hours}h: ${minutes}m: ${seconds}s`}</div>} />
                        </div>
                     </div>
                     <div className='individualcampaign'>
                        <span>
                           <h2 className='font-semibold text-center text-lg px-3 mt-2 text-3xl' style={{ color: "white", fontSize: "22px" }}>
                              {data.name} <span style={{ float: "right" }}> </span>
                           </h2>
                           <h3 className='font-semibold text-center text-lg px-3 mt-2 text-2xl' style={{ color: "grey" }}>
                              Target Amount
                           </h3>
                           <div className='text-center text-lg px-3 mt-2 text-xl'>{data.target_amount} ETH</div>
                        </span>
                        <div className='flex items-center px-3 mt-2'>
                           <span className='ml-2 text-zinc-400'>#{data.type}</span>
                           <span className='flex items-center ml-10 '>
                              <span>
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
                        <div class='w-65 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                           <div class='bg-gradient-to-tr from-blue-500 to-cyan-400 h-2.5 rounded-full dark:bg-gray-300' style={{ width: (data.current_amount / data.target_amount) * 10 + "rem" }}></div>
                        </div>
                     </div>
                     <br />
                  </Link>
               </li>
            ))}
         </ul>
      </>
   );
}

export default IndividualItem;
