import {
  fetchProductsAction,
  fetchProductsByTypeProductAction,
} from "@/action";
import P from "@/components/p";
import { currentUser } from "@clerk/nextjs/server";
import { userAgent } from "next/server";

export default async function HomePage({ searchParams }) {
  
  const productType =
    searchParams.productType === "all" ? "" : searchParams.productType;
  const products = productType
    ? await fetchProductsByTypeProductAction(productType)
    : await fetchProductsAction();

  return <P products={products} option={productType} />;
}
