import { fetchAddsFromCart, getProductsAddsAction } from "@/action";
import Cart from "@/components/cart";
import { ipd } from "@/components/view-product";
import axios from "axios";
import React from "react";

async function CartPage({searchParams}) {
  const adds = JSON.parse(searchParams._ua)
  return <Cart adds={adds.reverse()} />;
}

export default CartPage;
