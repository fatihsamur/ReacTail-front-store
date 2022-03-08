import React from 'react';
import SingleProductCard from './SingleProductCard';

const MainContent = () => {
  return (
    <div>
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto">
          <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
