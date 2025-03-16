import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductList() {
  const products = ["", "", "","", ""];
  return (
    <div
      id="product"
      className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center"
    >
      <div
        id="product"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {products.map((product, index) => (
          <Link href={"/product/123"} key={index}>
            <Image
              src={"/product-1.png"}
              width={500}
              height={500}
              className="max-w-80 h-72 object-cover rounded-lg shadow-blue-400"
              alt={""}
            />
            <div className="mt-4">
              <h2 className="font-semibold text-lg">A very Good Watch</h2>
              <p className="font-medium text-sm mt-1">$1220</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
