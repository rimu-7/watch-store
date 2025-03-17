"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("/api/fetch-products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div id="product" className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="block"
          >
            <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform backdrop-blur-md border border-white/50">
              <div className="relative w-full h-36 md:h-40 overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="responsive" // Makes the image responsive
                  width={500} // Set a natural width for the image
                  height={300} // Set a natural height for the image
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-bold text-xl text-gray-800">
                  {product.name}
                </h2>
                <p className="font-medium text-md mt-2 text-gray-700 bg-white/50 px-3 py-1 rounded-lg inline-block">
                  ${product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
