"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


interface Product{
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}



function ProductList() {
  // const products = ["", "", "", "", ""];
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("api/fetch-products")
      .then((response) => setProducts(response.data.products))
  });

  return (
    <div id="product" className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product, index) => (
          <Link href={`/product/${product._id}`} key={index} className="block">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-64 md:h-72">
                <Image
                  src={product.image}
                  alt="Product Image"
                  layout="fill"
                  objectFit="contain" // Prevents cropping
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="font-medium text-sm mt-1 text-gray-600">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
