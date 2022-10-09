import React from "react";

function NavBar() {
  return (
    <div className="main-navbar">
      <div className="navbar-right">
        <div className="search-box">
          <svg
            width="22px"
            height="22px"
            stroke-width="1.52"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#ffffff"
          >
            <path
              d="M15.5 15.5L19 19M5 11a6 6 0 1012 0 6 6 0 00-12 0z"
              stroke="#ffffff"
              stroke-width="1.52"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="add-friend-box">
          <svg
            width="22px"
            height="22px"
            stroke-width="1.52"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#ffffff"
          >
            <path
              d="M17 10h3m3 0h-3m0 0V7m0 3v3M1 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M8 12a4 4 0 100-8 4 4 0 000 8z"
              stroke="#ffffff"
              stroke-width="1.52"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
