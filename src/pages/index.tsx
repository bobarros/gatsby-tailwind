////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////// Components

import { Layout } from '../layouts'

const Index = () => {
  return (
    <Layout>
      <div className={div}>
        Home page
      </div>
    </Layout>
  );
};

export default Index;

/////////////////////////////////////////// Tailwind style

const 
  div = "p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4";