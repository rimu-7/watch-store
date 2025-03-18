"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

function Navbar() {
  //search funtion
  const router = useRouter();
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", e.target.value);

    const searchQuery = urlParams.toString();

    router.push(`/search?${searchQuery}`);
  };

  return (
    <nav className="px-4 md:px-12 py-4 md:py-6 ">
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className="inline-block items-center font-bold text-3xl"
        >
          <span className="text-red-500">O</span>watch
        </Link>
        <div className="relative mx-w-[300] md:max-w-[400] border-black/[0.7]">
          <div className="  absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* Search Icon */} <Search className=" w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="h-[36px] relative pl-10 border-[1px] 
            text-sm rounded-[8px] w-full py-2 px-3  "
          />
        </div>
        <Link href={"/add-product"}>
          <div
            className="bg-[#212529] text-white text-sm px-3 py-2 rounded-md 
            cursor-pointer"
          >
            Product
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
