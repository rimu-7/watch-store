import React from "react";

const AddForm = () => {
  // Server Action
  async function create() {
    "use server";
    // Mutate data
  }
  return (
    <div className="">
      <form
        action={create}
        className="w-full md:w-full lg:w-[70%] mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
      >
        <div className="flex  flex-col w-full">
          <label htmlFor="">Product Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            className="w-full px-3 py-1.5 md:py-5 text-[#252422] rounded-lg bg-white border border-gray-500 cursor-pointer"
          />
        </div>

        <div className="flex  flex-col w-full">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="Name"
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
            id=""
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
