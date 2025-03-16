"use client";

import { addAction } from "@/utils/addAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const AddForm = () => {
  const [imageURL, setImageURL] = useState("");
  const router = useRouter();
  // Server Action
  async function clientAddAction(fromData: FormData) {
    const { error, success } = await addAction(fromData);

    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);

      router.push("./");
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const fileSize = file.size;

      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("Image size is more than 1Mb is not allowed");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };

  return (
    <div className="">
      <form
        action={clientAddAction}
        className="w-full md:w-full lg:w-[70%] mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
      >
        {imageURL && (
          <Image
            src={imageURL}
            alt="Uploaded image"
            width={1000}
            height={1000}
            className="w-full max-h-96 object-cover object-center rounded-xl"
            unoptimized={true}
          />
        )}

        <div className="flex  flex-col w-full">
          <label htmlFor="">Product Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            className="w-full px-3 py-1.5 md:py-5 text-[#252422] rounded-lg bg-white border border-gray-500 cursor-pointer"
          />
        </div>

        <div className="flex  flex-col w-full">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the Product Name"
            className="w-full px-3 py-1.5 md:py-5 text-[#252422] rounded-lg bg-white border border-gray-500 cursor-pointer"
          />
        </div>

        <div className="flex  flex-col w-full">
          <label htmlFor="">Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Enter the Product Price"
            className="w-full px-3 py-1.5 md:py-5 text-[#252422] rounded-lg bg-white border border-gray-500 cursor-pointer"
          />
        </div>
        <div className="flex  flex-col w-full">
          <label htmlFor="">Seller's Link:</label>
          <input
            type="text"
            name="link"
            placeholder="Link to Where Buyers can Find You"
            className="w-full px-3 py-1.5 md:py-5 text-[#252422] rounded-lg bg-white border border-gray-500 cursor-pointer"
          />
        </div>
        <div className="flex  flex-col w-full">
          <label htmlFor="">Description:</label>
          <textarea
            name="description"
            placeholder="Enter the Product Description"
            rows={4}
            className="w-full px-3 py-1.5 md:py-5 text-[#252422] rounded-lg bg-white border border-gray-500 cursor-pointer"
          ></textarea>
        </div>
        <button className="w-full px-3 py-1.5 md:py-5 text-white rounded-lg bg-[#252422] border border-gray-500 cursor-pointer">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddForm;
