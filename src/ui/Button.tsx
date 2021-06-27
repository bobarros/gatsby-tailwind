////////////////////////////////////////////// React

import React from "react";

///////////////////////////////////////////// Gatsby

import { Link } from "gatsby";

///////////////////////////////////////////// Type

type ButtonType = { 
  to:string, 
  text?:string, 
  onClick?:() => void 
};

////////////////////////////////////////// Component

const Button = ({ to, text = "Contact", onClick }:ButtonType) => {
  return (
    <Link to={to} className={`${defaultState} ${hoverState}`} onClick={onClick}>
      {text}
    </Link>
  );
};

export default Button;

/////////////////////////////////////////// Tailwind style

const 
  defaultState = `
  appearance-none cursor-pointer text-white bg-primary-500 border-none 
  rounded-radius tracking-letterSpacing py-1.5 px-3shadow-var1 transition-tvar 
  capitalize
  `,
  hoverState = "hover:bg-primary-700 hover:shadow-var2";
