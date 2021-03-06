////////////////////////////////////////////// React

import React, { useState, useEffect } from "react";

///////////////////////////////////////////// Gatsby

import { Link } from "gatsby";

/////////////////////////////////// Local Components

import { LogoSVG } from "../components";
import { Button } from "../ui";

////////////////////////////////////// Third Parties

import { FiAlignJustify } from "react-icons/fi";

////////////////////////////////////////// Component

const Navbar = () => {

  const [show, setShow] = useState(false);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => setOnLoad(true), [onLoad]);

  if (!onLoad)
    return (
      <nav className={navbar}>
        <div className={navCenter}>
          <div className={navHeader}></div>
        </div>
      </nav>
    );

  ////  Preps

  const CustomLink = ({ to, children }: { to: string; children: string }) => (
    <Link onClick={() => setShow(false)} className={navLink} activeClassName="active-link" to={to}>
      {children}
    </Link>
  );

  ////  Structure

  return (
    <nav className={navbar}>
      <div className={navCenter}>
        <div className={navHeader}>
          <Link to="/">
            <LogoSVG />
          </Link>
          <button className={button} onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? navLinksShow : navLinks}>
          <CustomLink to="/">home</CustomLink>
          <CustomLink to="/about">about</CustomLink>
          <CustomLink to="/tags">tags</CustomLink>
          <CustomLink to="/recipes">recipes</CustomLink>          
        </div>
        <div className={`${navLink} ${contactLink}`}>
          <Button to="/contact" onClick={() => setShow(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/////////////////////////////////////////// Tailwind style

  const 
  navbar = "flex items-center justify-center lg:h-24",
  navCenter = "w-90w max-w-maxvar lg:flex lg:items-center",
  navHeader = "h-24 flex justify-between items-center lg:p-0 lg:mr-o lg:h-auto",
  button = "py-0.5 px-3 lg:hidden",
  navLinks = "h-0 overflow-hidden flex flex-col transition-tvar lg:h-auto lg:flex-row lg:items-center lg:w-full",
  navLinksShow = "h-96 overflow-hidden flex flex-col transition-tvar lg:h-auto lg:flex-row lg:items-center lg:w-full",
  navLink = `
    block text-center text-2xl capitalize text-textColor 
    tracking-letterSpacing py-4 px-0 border-t border-gray-300 transition-tvar 
    lg:p-0 lg:border-t-0 lg:mr-4 text-base`,
  contactLink = "flex justify-center py-1 px-4";
