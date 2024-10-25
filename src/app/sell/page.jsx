import Sell from "@/components/sell";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import product from "../products/[p]/[productId]/page";

async function SellPage({ searchParams }) {
  const product_sell = searchParams.product_obj;
  const user = await currentUser();
  return (
    <Sell
      user={JSON.parse(JSON.stringify(user))}
      product={JSON.parse(product_sell)}
    />
  );
}

export default SellPage;
