////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////// Component

const Footer = () => {
  return (
    <footer className={footer}>
      <p className={p}>
        &copy; {new Date().getFullYear()}{" "}
        <span className={span}>
          Bruno's TailWind Project{" "}
        </span> 
        Built with{" "}
        <a className={a} target="_blank" rel="noopener" href="https://www.gatsbyjs.com/">
          Gatsby
        </a>
      </p>
    </footer>
  );
};

export default Footer;

/////////////////////////////////////////// Tailwind style

const 
  footer = "text-center h-16 flex items-center justify-center bg-black color text-white",
  p = "mb-0",
  span = "text-primary-500",
  a = "text-primary-500";
