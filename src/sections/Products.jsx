// import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const Products = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 pt-36 pb-16 px-20"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl lg:text-5xl font-bold lg:max-w-lg leading-tight">
          Our <span className="text-coral-red">Products</span>
        </h2>
        <p className="mt-6 lg:mt-8 max-w-lg info-text text-slate-gray leading-7">
          Check out our full range of products designed for performance and
          style.
        </p>
      </div>

      <div className="mt-12 lg:mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
