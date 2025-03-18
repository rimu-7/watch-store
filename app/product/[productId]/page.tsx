"use client";

import Product from "@/app/api/models/product.model";
import ProductList from "@/app/components/ProductList";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  link: string;
  description: string;
}

const ProductPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios
      .get(`/api/product/${params.productId}`)
      .then((response) => setProduct(response.data.product));
  }, []);

  if (!product) {
    return <p>Loading .....</p>;
  }

  return (
    <div className="px-4 md:px-12">
      <p
        className="cursor-pointer py-5 font-bold text-xl "
        onClick={() => router.back()}
      >
        &larr;Back
      </p>

      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row 
      justify-between items-center md:space-x-10"
      >
        <Image
          src={product.image}
          alt="img"
          width={500}
          height={500}
          className="max-w-full rounded-2xl md:max-w-xl md min-w-[3-rem] min-h-[28rem] max-h-[28rem]
           object-cover object-center basis-1/2"
        />
        <div className="p-4 md:p-6 bg-white w-full  rounded-lg">
          <div className="relative text-xl md:text-2xl font-bold">
            <span
              onClick={() => setOpen(!open)}
              className="cursor-pointer tracking-widest absolute top-0 right-0"
            >
              ...
            </span>

            {/* Dropdown menu */}
            {open && (
              <div className="absolute shadow-md pb-2 px-4 text-sm md:text-base font-normal right-0 top-8 bg-white rounded-lg border border-gray-200 w-28">
                <Link href={`/product/${product._id}`}>
                  <p className="mb-2 pb-2 border-b border-gray-300 hover:text-blue-500 cursor-pointer">
                    Update
                  </p>
                  <p className="text-red-500 cursor-pointer hover:text-red-700">
                    Delete
                  </p>
                </Link>
              </div>
            )}
          </div>

          <h3 className="text-lg md:text-xl font-semibold mt-3">
            {product.name}
          </h3>
          <h3 className="text-2xl md:text-3xl font-semibold mt-3">
            ${product.price}
          </h3>

          <Link href={product.link} target="_blank">
            <button className="mt-5 bg-[#212529] hover:bg-[#343A40] text-white px-4 py-2 w-full font-semibold rounded-md transition-all duration-300">
              Contact Seller
            </button>
          </Link>

          <p className="font-semibold mt-6 md:mt-10 text-md md:text-lg">
            Description
          </p>
          <p className="mt-1 text-sm md:text-base">{product.description}</p>
        </div>
      </div>

      <h2 className="w-full text-2xl font-semibold pt-20">
        You might also like
      </h2>
      <ProductList />
    </div>
  );
};

export default ProductPage;
