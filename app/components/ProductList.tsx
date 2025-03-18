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
            <div className="relative p-5 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-lg bg-white/30 border border-white/40">
              {/* Image Section */}
              <div className="relative w-full h-72 md:h-48 overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="mt-6 text-center">
                <h2 className="font-bold text-2xl text-gray-900 drop-shadow-lg">
                  {product.name}
                </h2>
                <p className="font-semibold text-md mt-3 text-gray-800 bg-white/60 px-4 py-2 rounded-lg shadow-md inline-block">
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
