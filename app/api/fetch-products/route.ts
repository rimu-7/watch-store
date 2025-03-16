import { ConnectDB } from "../Database/ConnectDB";
import Product from "../models/product.model";

export async function GET(request: Request) {
  await ConnectDB();

  try {
    const products = await Product.find({}).sort({ creatAt: -1 });

    return Response.json({ products }, { status: 200 });
  } catch (error: any) {
    console.log("Error in fetching products");

    return Response.json({message: error.message},{status: 400} )
  }
}
