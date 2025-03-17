import { NextRequest } from "next/server";
import { ConnectDB } from "../Database/ConnectDB";
import Product from "../models/product.model";

export async function GET(request: NextRequest) {
  try {
    await ConnectDB();

    const searchParams = request.nextUrl.searchParams;
    const searchTerm = searchParams.get("searchTerm");

    const products = await Product.find({
      name: { $regex: searchTerm, $options: "i" },
    }).sort({ createdAt: -1 });
    return Response.json({ products }, { status: 200 });
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 400 });
  }
}

