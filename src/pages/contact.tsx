////////////////////////////////////////////// React

import React from "react";

////////////////////////////////////////// Components

import { Layout } from "../layouts";

const Contact = () => {
  return (
    <Layout>
      <div className="w-90w max-w-maxvar mx-auto my-0 min-h-screen">
        <section className="pb-12 px-16 flex">
        <article className="w-3/6 px-4 my-auto">
            <h2>Want to get in Touch?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolore id quos molestiae natus veritatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              quidem enim repudiandae beatae illum. 
            </p>
          </article>
          <article className="w-3/6">
            <form action="" className="w-full bg-white rounded-radius shadow-var1 py-8 px-10">
              <div className="mb-4">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="mb-4">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="w-full">
                submit
              </button>
            </form>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
