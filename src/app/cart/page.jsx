import { fetchAddsFromCart } from "@/action";
import Cart from "@/components/cart";
import React from "react";

async function CartPage() {
  const adds = await fetchAddsFromCart(navigator.userAgent[1]);
  console.log(navigator.userAgent )
  return <Cart adds={adds}/>
}

export default CartPage;
