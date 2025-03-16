"use server";

import { ConnectDB } from "@/app/api/Database/ConnectDB";
import cloudinary from "./cloudinary";
import Product from "@/app/api/models/product.model";

export async function addAction(formData: FormData) {
  try {
    const image = formData.get("image") as File;
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const link = formData.get("link") as string;
    const description = formData.get("description") as string;

    if (!image || !name || !price || !link || !description) {
      console.log("All fields are required");
      return { error: "All fields are required" };
    }

    await ConnectDB();

    // Convert File to Buffer
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Upload Image to Cloudinary
    const imageResponse: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "auto", folder: "Watches" },
        async (error, result) => {
          if (error) {
            reject(error.message);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    //Store in DB
    await Product.create({
      image: imageResponse.secure_url,
      name,
      price,
      link,
      description,
    });
    return {
      success: "Product Upload Successfully",
    };
  } catch (error) {
    console.error("Error in addAction:", error);
    return { error: "Something went wrong" };
  }
}
