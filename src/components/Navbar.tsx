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
    <nav className={s.navbar}>
      <div className={s.navCenter}>
        <div className={s.navHeader}>
          <Link to="/">
            <LogoSVG />
          </Link>
          <button className={s.button}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={s.navLinks}>
          <Link to="/" className={s.navLink} activeClassName="active-link">home</Link>
          <Link to="/about" className={s.navLink} activeClassName="active-link">about</Link>          
          <Link to="/tags" className={s.navLink} activeClassName="active-link">tags</Link>
          <Link to="/recipes" className={s.navLink} activeClassName="active-link">recipes</Link>
        </div>
        <div className={`${s.navLink} ${s.contactLink}`}>
          <Link to="/contact" className={`${s.contactButton} ${s.contactHover}`}>contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/////////////////////////////////////////// Tailwind style

const s = {
  navbar: "flex items-center justify-center lg:h-24",
  navCenter: "w-90w max-w-maxvar lg:flex lg:items-center",
  navHeader: "h-24 flex justify-between items-center lg:p-0 lg:mr-o lg:h-auto",
  button: "py-0.5 px-3 lg:hidden",
  navLinks: "h-0 overflow-hidden flex flex-col transition-tvar show-links lg:h-auto lg:flex-row lg:items-center lg:w-full",
  navLink: "block text-center text-2xl capitalize text-textColor tracking-letterSpacing py-4 px-0 border-t border-gray-300 transition-tvar lg:p-0 lg:border-t-0 lg:mr-4 text-base",
  contactLink: "flex justify-center py-1 px-4",
  activeLink: "text-primary-500", //does not work with tailwind
  contactButton: "cursor-pointer appearance-none text-white bg-primary-500 border-none rounded-radius tracking-letterSpacing py-1.5 px-3 shadow-var1 transition-tvar capitalize",
  contactHover: "hover:bg-primary-700 hover:shadow-var2"
}
