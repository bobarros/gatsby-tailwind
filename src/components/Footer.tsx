////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////// Component

const Footer = () => {
  return (
    <footer className="text-center h-16 flex items-center justify-center bg-black color text-white">
      <p className="mb-0">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-primary-500">SimplyRecipes</span> Built with{" "}
        <a
          className="text-primary-500"
          target="_blank"
          rel="noopener"
          href="https://www.gatsbyjs.com/"
        >
          Gatsby
        </a>
      </p>
    </footer>
  );
};

export default Footer;
