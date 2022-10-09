import React from "react";
import "../../styles/home.scss";
import BottomBar from "./BottomBar";
import Groups from "./Groups";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="main-home">
      <NavBar />

      <div className="top-heading-home">
        <p>Overall, you are owed ₹0.48</p>
        <svg
          width="30px"
          height="30px"
          stroke-width="1.52"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000"
        >
          <path
            d="M3 7V4a1 1 0 011-1h16a1 1 0 011 1v3M3 7l6.65 5.7a1 1 0 01.35.76v6.26a1 1 0 001.242.97l2-.5a1 1 0 00.758-.97v-5.76a1 1 0 01.35-.76L21 7M3 7h18"
            stroke="#000"
            stroke-width="1.52"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <Groups />
      <div className="bottom-box-add-expense">
        <div className="button">
          <svg
            width="20px"
            height="20px"
            stroke-width="1.52"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#fff"
          >
            <path
              d="M3 6h19l-3 10H6L3 6zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 01-3 0M17 19.5a1.5 1.5 0 01-3 0"
              stroke="#fff"
              stroke-width="1.52"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>Add expense</p>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default Home;
