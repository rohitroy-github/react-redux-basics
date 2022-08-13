import React from "react";

//Used for reading the state.values 
import { useSelector } from "react-redux";

const Navbar = () => {
  
  //Reading a state value using useSelector
  const amount = useSelector (state  => state.amount);

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Bank Of Polygon
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="#">TAB</a>
            </li>
          </ul>
          <div> 
            <button className="btn btn-primary" disabled="true">Your Balance Amount = {amount}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
