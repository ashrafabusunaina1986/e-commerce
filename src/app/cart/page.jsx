import { fetchAddsFromCart, getProductsAddsAction } from "@/action";
import Cart from "@/components/cart";
import { ipd } from "@/components/view-product";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { userAgent } from "next/server";
import React from "react";

async function CartPage() {
  const user = await currentUser();
  return <Cart user={JSON.parse(JSON.stringify(user))} />;
}

export default CartPage;
