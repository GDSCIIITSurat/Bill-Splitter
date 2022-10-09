import React from "react";

const groups_details = [
  {
    name: "Sed Gre",
  },
  {
    name: "Nasik trip",
  },
  {
    name: "Goa trip",
  },
];
function Groups() {
  return (
    <div className="group-main">
      {groups_details.map((res) => {
        return (
          <div className="group-box">
            <div className="group-profile-box">
              <svg
                width="50px"
                height="50px"
                stroke-width="1.52"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000"
              >
                <path
                  d="M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V13"
                  stroke="#000"
                  stroke-width="1.52"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.667 17h-3.334v-2.333H8v-3.334h2.333V9h3.334v2.333H16v3.334h-2.333V17z"
                  stroke="#000"
                  stroke-width="1.52"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <p>{res.name}</p>
            <p>you are owed ₹0.48</p>
          </div>
        );
      })}
    </div>
  );
}

export default Groups;
