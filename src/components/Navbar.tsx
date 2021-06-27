////////////////////////////////////////////// React

import React, { useState, useEffect} from "react";

///////////////////////////////////////////// Gatsby

import { Link } from "gatsby";

/////////////////////////////////// Local Components

import { LogoSVG } from "../components";

////////////////////////////////////// Third Parties

import { FiAlignJustify } from "react-icons/fi";

////////////////////////////////////////// Component

const Navbar = () => {

  const [show, setShow] = useState(false);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(true);
  }, [])
  
  if(!onLoad) return <div>teste</div>

  return (
    <nav className={s.navbar}>
      <div className={s.navCenter}>
        <div className={s.navHeader}>
          <Link to="/">
            <LogoSVG />
          </Link>
          <button className={s.button} onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? s.navLinksShow : s.navLinks}>
          <Link onClick={() => setShow(false)} className={s.navLink} activeClassName="active-link" to="/">home</Link>
          <Link onClick={() => setShow(false)} className={s.navLink} activeClassName="active-link" to="/about">about</Link>          
          <Link onClick={() => setShow(false)} className={s.navLink} activeClassName="active-link" to="/tags">tags</Link>
          <Link onClick={() => setShow(false)} className={s.navLink} activeClassName="active-link" to="/recipes">recipes</Link>
        </div>
        <div className={`${s.navLink} ${s.contactLink}`}>
         <Link to="/contact" className={`${s.contactButton} ${s.contactHover}`} onClick={() => setShow(false)}>contact</Link>
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
  navLinks: "h-0 overflow-hidden flex flex-col transition-tvar lg:h-auto lg:flex-row lg:items-center lg:w-full",
  navLinksShow: "h-96 overflow-hidden flex flex-col transition-tvar lg:h-auto lg:flex-row lg:items-center lg:w-full",
  navLink: "block text-center text-2xl capitalize text-textColor tracking-letterSpacing py-4 px-0 border-t border-gray-300 transition-tvar lg:p-0 lg:border-t-0 lg:mr-4 text-base",
  contactLink: "flex justify-center py-1 px-4",
  contactButton: "cursor-pointer appearance-none text-white bg-primary-500 border-none rounded-radius tracking-letterSpacing py-1.5 px-3 shadow-var1 transition-tvar capitalize",
  contactHover: "hover:bg-primary-700 hover:shadow-var2"
}
