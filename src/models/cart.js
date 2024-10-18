import { Schema, model, models } from "mongoose";
const CartSchema = new Schema({
  productId: String,
  systemId:String,
  createdAt: String,
  dateCreate: String,
});
const Carts = models.Carts || model("Carts", CartSchema);
export default Carts;
