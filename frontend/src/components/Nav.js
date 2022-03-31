import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
<div style={{ padding: "0px 0px 30px 0px" }}>
    <nav className="navbar navbar-dark bg-primary mb-3" style={{ padding: "10px" }}>
      <Link className="navbar-brand" to="/">
         Todo Spades Project
      </Link>
      <div className="" id="navbarText">
        <ul className="navbar-nav ml-auto" style={{ display: "inline-block" }}>
          <li className="nav-item mr-4 btn btn-success" style={{ display: "inline-block" , color:"#fff"}}>
            <Link className="nav-link " style={{ color:"#fff" }} to="/create">
              Create
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    
  );
}
