import React from "react";
import "../components/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h3>Start Bootstrap</h3>
        <ul className="options">
          <li>Home</li>
          <li>About</li>
          <li>
            <div className="dropdown">
            <button className="drpbtn">Shop</button>
            <div className="dropdown-cnt">
               <a href="#">All products</a>
               <a href="#">New Arrivals</a>
               <a href="#">Popular Items</a>
            </div>
            </div>
          </li>
        </ul>
        <button>Cart</button>
      </div>
    </>
  );
}

export default Navbar;
