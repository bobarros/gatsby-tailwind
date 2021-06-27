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
      <div className={s.div}>
        <section className={s.section}>
          <article>
            <h2 className={s.h2}>I'm baby coloring book poke taxidermy</h2>
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
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
        </section>
      </div>
    </Layout>
  )
}

export default About

/////////////////////////////////////////// Tailwind style

const s = {
  div: "w-90w max-w-maxvar min-h-minvar my-0 mx-auto",
  section: "grid gap-y-8 gap-x-16 pb-12 lg:h-16 lg:items-center lg:grid-cols-2",
  h2: "normal-case font-bold",
  button: "cursor-pointer appearance-none text-white bg-primary-500 border-none rounded-radius tracking-letterSpacing py-1.5 px-3 shadow-var1 transition-tvar capitalize",
  contactHover: "hover:bg-primary-700 hover:shadow-var2",
  image: "rounded-radius",
  recipes: "",
}