////////////////////////////////////////////// React

import React from "react";

///////////////////////////////////////////// Gatsby

import { StaticImage } from "gatsby-plugin-image"

////////////////////////////////////////// Components

import { Layout } from '../layouts'
import { Button } from '../ui'

/////////////////////////////////////////// Component

const About = () => {
  return (
    <Layout>
      <div className={div}>
        <section className={section}>
          <article>
            <h2 className={h2}>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Button to="/contact"/>
          </article>
          <StaticImage
            src="../images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className={image}
            placeholder="blurred"
          />
        </section>
        <section>
          <h5 className={recipes}>Look at this Awesomesouce!</h5>
        </section>
      </div>
    </Layout>
  )
}

export default About

/////////////////////////////////////////// Tailwind style

const 
  div = "w-90w max-w-maxvar min-h-minvar my-0 mx-auto",
  section = "grid gap-y-8 gap-x-16 pb-12 lg:h-400px lg:items-center lg:grid-cols-2",
  h2 = "normal-case font-bold",
  image = "rounded-radius h-500px lg:h-full",
  recipes = "text-center max-w-full";