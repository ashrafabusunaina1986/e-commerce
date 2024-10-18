import { fetchProductsByTypeProductAction, fetchProductsByUserAndTypeAction } from "@/action";
import CommonViewProducts from "@/components/common-view-products";
import ViewProduct from "@/components/view-product";
import { options } from "@/utils";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

async function product({ params }) {
  
  const kwywords = () =>
    (
      params?.p[0].toUpperCase() + params?.p.slice(1, params?.p.length)
    ).replaceAll("-", " ");

  const user = await currentUser();
  const products = user
    ? await fetchProductsByUserAndTypeAction(user?.id, kwywords())
    : await fetchProductsByTypeProductAction(kwywords());
  // console.log(params?.productId, kwywords());
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <ViewProduct
        product={products.filter(
          (product) => product?._id === params?.productId
        )}
        user={JSON.parse(JSON.stringify(user))}
      />
      <CommonViewProducts
        option={kwywords()}
        user={JSON.parse(JSON.stringify(user))}
        products={products}
        path={params?.p}
      />
    </div>
  );
}

export default product;
