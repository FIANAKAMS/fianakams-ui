import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './components/Pages/Home'
import Start from './components/Bika/Start'
import Group from './components/Pages/Group'
import Login from './components/Login/Login'
import ForgotPsd from './components/Login/ForgotPsd'
import CreateAccount from './components/Login/CreateAccount'


function App() {
  return (
    <BrowserRouter>
              <Routes>
                
                  <Route path="/login" element={<Login/>} />
                  <Route path="/" element={<Start/>} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/group' element={<Group />} />
                  <Route path='/forgot-password' element={<ForgotPsd />} />
                  <Route path='/create-account' element={<CreateAccount />} />
                 
              </Routes>
          </BrowserRouter>

  );
}

    
  ;


export default App;
