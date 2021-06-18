////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////// Component

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.p}>

        &copy; {new Date().getFullYear()}{" "}
        <span className={style.span}>SimplyRecipes</span> Built with{" "}
        <a className={style.a} target="_blank" rel="noopener" href="https://www.gatsbyjs.com/">
          Gatsby
        </a>
        
      </p>
    </footer>
  );
};

export default Footer;

/////////////////////////////////////////// Tailwind style

const style = {
  footer: "text-center h-16 flex items-center justify-center bg-black color text-white",
  p: "mb-0",
  span: "text-primary-500",
  a: "text-primary-500"
}