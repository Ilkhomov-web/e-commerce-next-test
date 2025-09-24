import mongoose from "mongoose";

const DiscountSchema = new mongoose.Schema(
  {
    active: { type: Boolean, default: false },
    percent: { type: Number, default: 0 },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    productDescription: { type: String },
    price: { type: Number, required: true },
    discount: { type: DiscountSchema, default: () => ({ active: false, percent: 0 }) },
    deliveredTime: { type: String },
    rate: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    productImg: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);


