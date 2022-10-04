import React from 'react';
import Login from "../src/pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing_page from './pages/Landing_page';

function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing_page />} />


        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
