import React from "react";
import {Link} from "react-router-dom"

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" to="/" >
      HOME
    </Link>
    
    <Link className="navbar-brand" to="/saved" >
    <div style={{float: "right"}}>
      Saved Articles
    </div>
    </Link>

  </nav>
);

export default Nav;
