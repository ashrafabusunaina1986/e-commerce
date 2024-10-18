"use client";
import React from "react";
import { supabaseClient } from "../new-product-s";
import Image from "next/image";

export default function CommonCard({ product, className }) {
  const getImageSupabase = () => {
    return supabaseClient.storage
      .from("job-board")
      .getPublicUrl(`public/${product?.image}`).data.publicUrl;
  };
  //   console.log(getImageSupabase());
  return (
    <div className={className}>
      <div className="relative w-full">
        <Image
          src={getImageSupabase()}
          alt={product?.image}
          width={500}
          height={600}
          className="w-full h-[150px] object-fill rounded-md"
        />
        <h1 className=" absolute left-2 top-[120px] inline-flex items-center justify-center opacity-80 font-bold text-blue-950 rounded-md w-11/12 bg-gray-300">
          {product?.nameProduct}
        </h1>
      </div>
      <div className=" px-3 py-2 flex flex-col gap-3">
        <div className="flex-col items-baseline justify-between gap-2">
          <h3 className="text-sm font-bold text-gray-500">
            Measurement:{product?.measurement}
          </h3>
          <h5 className="text-xs font-bold text-gray-50 bg-black rounded-sm px-2 py-1 flex flex-wrap items-center justify-center">
            {product?.selectType}
          </h5>
        </div>
        <h4 className="text-xs font-bold text-gray-500 flex flex-wrap">
          {product?.nameOfTheProducingCompany}
        </h4>
      </div>
      <div className="w-full flex items-baseline justify-around">
        <h6 className="text-xs font-bold text-blue-950">
          {product?.dateCreate}
        </h6>
        <h6 className="text-xs font-bold text-blue-950 bg-yellow-500 px-3 py-1 rounded-md">
          Quality:{product?.quality}
        </h6>
      </div>
    </div>
  );
}
