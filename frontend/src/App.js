import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Logout from "./Pages/Authentication/Logout";
import Home from "./Pages/HomePage/Home";
import Details from "./Pages/DetailView/Details";
import CapmpaignForm from "./Pages/Forms/CampaignForm";
import Dashboard from "./Pages/Dashboard";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />}>
                  <Route path='/dashboard' element={<Dashboard />}></Route>

                  <Route path='/campaign/:id' element={<Details />}></Route>
                  <Route path='/addcampaign' element={<CapmpaignForm />}></Route>
               </Route>
               <Route path='/login' element={<Login />}></Route>
               <Route path='/logout' element={<Logout />}></Route>
               <Route path='/register' element={<Register />}></Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
