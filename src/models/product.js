import { Schema, model, models } from "mongoose";
const ProductSchema = new Schema({
  userId: String,
  email: String,
  nameProduct: String,
  image: String,
  price: String,
  description: String,
  measurement: String,
  specifications: String,
  nameOfTheProducingCompany: String,
  websiteOfTheProducingCompany: String,
  nameOfTheSellingCompany: String,
  theSellingCompanysWebsite: String,
  made: String,
  quality: String,
  selectType: String,
  isSelected: { type: Boolean, default: false },
  createdAt: String,
  dateCreate: String,
});
const Products = models.Products || model("Products", ProductSchema);
export default Products;
