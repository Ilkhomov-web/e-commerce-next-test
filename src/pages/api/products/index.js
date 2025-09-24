import { connectToDatabase } from "@/lib/db";
import Product from "@/models/Product";

export default async function handler(req, res) {
  const { method } = req;
  try {
    await connectToDatabase();
  } catch (e) {
    return res.status(500).json({ message: "DB connection error" });
  }

  if (method === "GET") {
    try {
      const products = await Product.find({}).sort({ createdAt: -1 }).lean();
      return res.status(200).json(products);
    } catch (e) {
      return res.status(500).json({ message: "Failed to fetch products" });
    }
  }

  if (method === "POST") {
    try {
      const created = await Product.create(req.body);
      return res.status(201).json(created);
    } catch (e) {
      return res.status(400).json({ message: "Failed to create product" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}


