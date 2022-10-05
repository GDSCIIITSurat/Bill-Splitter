import React from 'react';
import Login from "../src/pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Profile from './pages/Profile';

function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/profile" element={<Profile />} />
          
          


        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
