import React from "react";
import PortfolioType from "./PortfolioType";

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='mt-20 flex scroll-m-24 flex-col items-center py-4'
    >
      <h2 className='mb-16 text-center text-3xl font-bold text-white underline underline-offset-4'>
        PORTFOLIO
      </h2>

      <div className='flex max-w-sm justify-start gap-4 overflow-x-auto px-8 pb-4 md:max-w-none md:flex-wrap md:justify-center'>
        <PortfolioType type='All' active />
        <PortfolioType type='Frontend' />
        <PortfolioType type='Backend' />
        <PortfolioType type={"Full Stack"} />
        <PortfolioType type='Mobile App' />
      </div>
    </section>
  );
};

export default Portfolio;