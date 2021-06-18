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
    <nav className={style.navbar}>
      <div className={style.navCenter}>
        <div className={style.navHeader}>
          <Link to="/">
            <LogoSVG />
          </Link>
          <button className={style.button}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={style.navLinks}>
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

/////////////////////////////////////////// Tailwind style

const style = {
  navbar: "flex items-center justify-center lg:h-24",
  navCenter: "w-90w max-w-maxvar lg:flex lg:items-center",
  navHeader: "h-24 flex justify-between items-center lg:p-0 lg:mr-o lg:h-auto",
  button: "py-0.5 px-3 lg:hidden",
  navLinks: "h-0 overflow-hidden flex flex-col transition-tvar show-links"
}
