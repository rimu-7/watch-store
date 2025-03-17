"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchTermFromUrl = searchParams.get("searchTerm");

    if (searchTermFromUrl) {
      axios
        .get(`api/search?searchTerm=${searchTermFromUrl}`)
        .then((response) => {
          console.log("products", response.data.products);
          if (Array.isArray(response.data.products)) {
            setProducts(response.data.products);
          } else {
            setProducts([]); // Fallback to empty array if 'products' is not an array
          }
        })
        .catch((error) =>
          console.log("Error fetching search results: ", error)
        );
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div
        id="product"
        className="container mx-auto px-4 md:px-8 py-8 flex-grow"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(products) && products.length > 0 ? (
            
            products.map((product) => (
              <Link
                href={`/product/${product._id}`}
                key={product._id}
                className="block"
              >
                <div className="p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform backdrop-blur-md border border-white/50">
                  <div className="relative w-full h-36 md:h-40 overflow-hidden rounded-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="responsive"
                      width={500}
                      height={300}
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
            ))
          ) : (
            <div className="font-semibold text-gray-400 py-12 px-5  mt-10">
              <p>No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
