////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////// Components

import { Layout } from '../layouts'

const Page404 = () => {
  return (
    <Layout>
      <div className="min-h-screen text-center py-12">
        <section>
          <h1 className="text-9xl">404</h1>
          <h2>page not found</h2>
        </section>
      </div>
    </Layout>
  );
};

export default Page404;