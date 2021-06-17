////////////////////////////////////////////// React

import React from "react";

///////////////////////////////////////////// Gatsby

import { Link } from "gatsby";

/////////////////////////////////// Local Components

import { LogoSVG } from "../components";

////////////////////////////////////// Third Parties

import { FiAlignJustify } from "react-icons/fi";

////////////////////////////////////////// Component

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center lg:h-24">
      <div className="w-90w max-w-maxvar lg:flex lg:items-center">
        <div className="h-24 flex justify-between items-center lg:p-0 lg:mr-o lg:h-auto">
          <Link to="/">
            <LogoSVG />
          </Link>
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">home</Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">about</Link>          
          <Link to="/tags" className="nav-link" activeClassName="active-link">tags</Link>
          <Link to="/recipes" className="nav-link" activeClassName="active-link">recipes</Link>
        </div>
        <div className="nav-link contact-link">
          <Link to="/contact" className="btn">contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
