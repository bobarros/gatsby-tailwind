////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////// Components

import { Layout } from '../layouts'

const Page404 = () => {
  return (
    <Layout>
      <div className={div}>
        <section>
          <h1 className={h1}>404</h1>
          <h2>page not found</h2>
        </section>
      </div>
    </Layout>
  );
};

export default Page404;

/////////////////////////////////////////// Tailwind style

const 
  div = "min-h-screen text-center py-12",
  h1 = "text-9xl";
