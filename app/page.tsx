import React from "react";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function page() {
  return (
    <div className="">
      <Home />
      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6">All Products</h2>
      <ProductList />
    </div>
  );
}

export default page;
