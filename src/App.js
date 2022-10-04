import React from 'react';
import Login from "../src/pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';

function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landingpage />} />


        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
