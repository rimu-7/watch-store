import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div
      className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] 
                flex flex-col md:flex-row justify-center items-center
                bg-white px-4 md:px-12 text-black"
    >
      <div className="max-w-2xl">
        <h1 className="text-5xl font-semibold pt-6 mtd:pt-0 md:text-7xl leading-tight">
          Timeless Elegance on Your Wrist
        </h1>
        <p className="text-[#405057] mt-4">
          Discover our curated collection of our premium watches, crafted for
          those who appreciate sophistication and precision.
        </p>
        <Link href={"#product"}>
          <button
            className="mt-8 bg-[#212529] px-3 py-2 
          rounded-md text-white"
          >
            Shop the Collection
          </button>
        </Link>
      </div>
      <Image
        src="/home-img.png"
        alt="image"
        layout="responsive"
        width={500}
        height={500}
      />
    </div>
  );
}

export default Home;
