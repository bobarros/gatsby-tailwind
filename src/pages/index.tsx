////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////////// Gatsby

import { Link } from 'gatsby'

////////////////////////////////////////// Components

import { Layout } from '../layouts'

export default () => {
  return (
    <Layout>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/icons/icon-144x144.png" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </Layout>
  );
};
