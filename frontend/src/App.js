import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import OTP from "./Pages/Authentication/OTP";
import Logout from "./Pages/Authentication/Logout";
import Home from "./Pages/HomePage/Home";
import Details from "./Pages/DetailView/Details";
import Analysis from "./Pages/DetailView/Analysis";
import CapmpaignForm from "./Pages/Forms/CampaignForm";
import PetitonForm from "./Pages/Forms/PetitionForm";
import PetitionDetails from "./Pages/DetailView/PetitionDetails";

import Dashboard from "./Pages/Dashboard";

import Petitionhistory from "./Pages/History/Petitionhistory";
import HistoryTab from "./Pages/History/HistoryTab";

// import SignupLogin from "./Pages/Authentication/SignupLogin";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />}>
                  <Route path='/dashboard' element={<Dashboard />}></Route>
                  <Route path='/campaignhistory' element={<HistoryTab />}></Route>
                  <Route path='/petitionhistory' element={<Petitionhistory />}></Route>
                  <Route path='/campaign/:id' element={<Details />}></Route>
                  <Route path='/analysis' element={<Analysis />}></Route>
                  <Route path='/petition/:id' element={<PetitionDetails />}></Route>
                  <Route path='/addcampaign' element={<CapmpaignForm />}></Route>
                  <Route path='/addpetition' element={<PetitonForm />}></Route>
               </Route>
               <Route path='/login' element={<Login />}></Route>
               <Route path='/logout' element={<Logout />}></Route>
               <Route path='/register' element={<Register />}></Route>
               <Route path='/otp' element={<OTP />}></Route>
               {/* <Route path='/test' element={<SignupLogin />}></Route> */}
            </Routes>
         </Router>
      </>
   );
}

export default App;
