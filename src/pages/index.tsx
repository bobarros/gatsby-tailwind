////////////////////////////////////////////// React

import React from "react";

///////////////////////////////////////////// Gatsby

import { StaticImage } from "gatsby-plugin-image"

////////////////////////////////////////// Components

import { Layout } from "../layouts";

const Index = () => {
  return (
    <Layout>
      <div className={div}>
        <header className={hero}>
          <StaticImage
            src="../images/main.jpeg"
            alt="eggs"
            className={image}
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className={container}>
            <div className={text}>
              <h1 className={header}>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </div>
    </Layout>
  );
};

export default Index;

/////////////////////////////////////////// Tailwind style

const 
  div = "w-90w max-w-maxvar min-h-minvar my-0 mx-auto",
  hero = "h-40h relative mb-8",
  image = "h-full rounded-radius",
  container = "absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 rounded-radius",
  text = "text-white text-center",
  header = "md:text-6xl md:mb-0";
