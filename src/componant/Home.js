import React from "react";

import SmallNav from "./smallNav";
import BigNav from "./bigNav";
import Carousel from "./carousel";
import Partner from "./partner";
import Trending from "./trending";
import Products from "./products";

function Main() {
  return (
    <div className="">
      {/* Small Screen Nav */}
      <SmallNav />
      {/* Big Screen Nav */}
      {/* <BigNav /> */}
      {/* Section Main Products */}
      <article>
        {/* Carousel */}
        <section className="max-w-[1440px] mx-auto mb-10">
          <Carousel />
        </section>
        {/*  Article for Demo Products */}
        <section className="mb-10">
          <Products />
        </section>
        {/* Company Partner */}
        <aside className="mb-10">
          <Partner />
        </aside>
        {/* Trending Products */}
        <section className="max-w-[1440px] mx-auto ">
          <Trending />
        </section>
      </article>
    </div>
  );
}

export default Main;
