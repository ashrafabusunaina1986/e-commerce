import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { supabaseClient } from "../new-product-s";
import Image from "next/image";

function Cards({ productAdd }) {
  const getImageSupabase = () => {
    return supabaseClient.storage
      .from("job-board")
      .getPublicUrl(`public/${productAdd?.image}`).data.publicUrl;
  };
  return (
    <div className="flex w-full flex-col ">
      <Card>
        <CardHeader>
          <CardTitle>{productAdd?.nameProduct}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-10 gap-y-20">
          <div>
            <div className="w-full">
              <Image
                src={getImageSupabase()}
                alt={productAdd?.image}
                width={500}
                height={600}
                className="w-full h-[150px] object-fill rounded-md"
              />
            </div>
            <div className=" px-3 py-2 flex flex-col gap-3">
              <div className="flex-col items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold text-gray-500">
                  Measurement:{productAdd?.measurement}
                </h3>
                <h5 className="text-xs font-bold text-gray-50 bg-black rounded-sm px-2 py-1 flex flex-wrap items-center justify-center">
                  {productAdd?.selectType}
                </h5>
              </div>
              <h4 className="text-xs font-bold text-gray-500 flex flex-wrap">
                {productAdd?.nameOfTheProducingCompany}
              </h4>
            </div>
            <div className="w-full flex items-baseline justify-around">
              <h6 className="text-xs font-bold text-blue-950">
                {productAdd?.dateCreate}
              </h6>
              <h6 className="text-xs font-bold text-blue-950 bg-yellow-500 px-3 py-1 rounded-md">
                Quality:{productAdd?.quality}
              </h6>
            </div>
          </div>
          <div className="flex gap-10">
            <h1 className="text-sm font-bold text-gray-950">Price:{productAdd?.price}</h1>
            <button className="text-sm font-bold text-white bg-yellow-600 px-3 py-1 h-max rounded-full hover:shadow-sm hover:shadow-gray-700">
          Buy
        </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
