import React from "react";
import Login from "./pages/Login_Signup/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Login_Signup/Signup";
import Home from "./pages/Main_Home/Home";
import GrpExpenses from "./pages/Expenses/GrpExpenses";
import ExpensePage from "./pages/ExpensePage";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/expense/group" element={<GrpExpenses />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
