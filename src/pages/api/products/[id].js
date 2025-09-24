import { connectToDatabase } from "@/lib/db";
import Product from "@/models/Product";

export default async function handler(req, res) {
  const { method, query } = req;
  const { id } = query;
  try {
    await connectToDatabase();
  } catch (e) {
    return res.status(500).json({ message: "DB connection error" });
  }

  if (method === "GET") {
    try {
      const product = await Product.findOne({ id }).lean();
      if (!product) return res.status(404).json({ message: "Not found" });
      return res.status(200).json(product);
    } catch (e) {
      return res.status(500).json({ message: "Failed to fetch product" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}


