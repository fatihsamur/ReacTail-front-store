import React, { useEffect, useState } from 'react';
import SingleProductCard from './SingleProductCard';
import axios from 'axios';

const MainContent = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('https://fakestoreapi.com/products');
      setFetchedData(data);
    };
    getData();
  }, []);

  const products = fetchedData.data;
  console.log(products);

  return (
    <div>
      <section>
        <div class="max-w-screen-xl z-0 px-4 py-8 mx-auto">
          <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
            {products.map((product) => (
              <SingleProductCard product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
