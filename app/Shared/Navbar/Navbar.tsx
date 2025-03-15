"use client" 
import {  Search } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="px-4 md:px-12 py-4 md:py-6 ">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="hidden md:inline-block items-center">
          BeautiWatches
        </Link>
        <div className="relative mx-w-[300] md:max-w-[400]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* Search Icon */} <Search className=" w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="h-[36px] relative pl-10 border-[1px] border-black/[0.7] 
            text-sm rounded-[8px] w-full py-2 px-3  "
          />
        </div>
        <Link href={"/add-product"}>
          <div
            className="bg-[#212529] text-white px-3 py-2 rounded-md 
            cursor-pointer"
          >
            Add Product
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
