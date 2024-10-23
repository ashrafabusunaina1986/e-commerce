import { fetchAddsFromCart, getProductsAddsAction } from "@/action";
import Cart from "@/components/cart";
import { ipd } from "@/components/view-product";
import axios from "axios";
import React from "react";

async function CartPage({searchParams}) {
  const adds = await getProductsAddsAction(searchParams.ua_);
  return <Cart adds={adds} />;
}

export default CartPage;
