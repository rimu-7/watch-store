import { NextResponse } from "next/server";
import { ConnectDB } from "@/app/api/Database/ConnectDB";
import Product from "@/app/api/models/product.model";

export async function GET() {
  try {
    await ConnectDB();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Error in fetching products:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
