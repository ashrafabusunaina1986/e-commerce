"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { supabaseClient } from "../new-product-s";
import { AddContext } from "@/context/AddToCart";
import { createAddProductToCart, fetchAddsFromCart } from "@/action";
import axios from "axios";
export const ipd = async () => {
  const c = await axios.get(`https://e-commerce-123.vercel.app/api`);
  console.log((await c.data))
  return (await c.data).addCart;
};
export default function ViewProduct({ product, user }) {
  const { add, setAdd } = useContext(AddContext);
  const [loading, setLoading] = useState(false);
  const [a, setA] = useState(false);
  const [str, setStr] = useState("");

  const getImageSupabase = () => {
    return supabaseClient.storage
      .from("job-board")
      .getPublicUrl(`public/${product[0]?.image}`).data.publicUrl;
  };
  const handleCreateAddProductToCart = async () => {
    const data = {
      productId: product[0]?._id,
      systemId: (await ipd()).toString(),
      createdAt: Date.now().toLocaleString(),
      dateCreate: new Date().toDateString(),
    };
    const r = await createAddProductToCart(
      data,
      `/products/${product[0]?.selectType}/${product[0]?._id}`
    );
    if (r) {
      setLoading(false);
      const ab = await fetchAddsFromCart((await ipd()).toString());
      localStorage.setItem((await ipd()).toString(), JSON.stringify(a));
      console.log((await ipd()).toString());

      setAdd(ab);
    }
  };
  // console.log(add);
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-gray-50 px-5 py-10 mb-20 border-[1px]">
      <div className="w-full flex flex-col gap-5 ">
        {a && (
          <div className="flex px-5 py-4 bg-red-950 rounded-full text-white w-[150px] text-xs font-bold fixed right-6 top-5 opacity-90 shadow-lg shadow-purple-300">
            <h1>add in cart 1</h1>
          </div>
        )}
        <Image
          src={getImageSupabase()}
          width={500}
          height={600}
          alt={product[0]?.image}
          className="w-full object-fill border-blue-800 h-[300px] md:h-[450px] lg:h-[600px] rounded-lg shadow-sm shadow-blue-950"
        />
      </div>
      <div className="w-full flex flex-col gap-5 px-6 py-5">
        <h1 className="text-3xl font-extrabold text-gray-950">
          Name Product:{product[0]?.nameProduct}
        </h1>
        <h2 className="text-2xl font-bold text-gray-800">
          Manufacturing country is {product[0]?.made}
        </h2>
        <div className="text-lg font-bold text-gray-800 flex flex-wrap gap-5 ">
          Specifications{" "}
          {product[0]?.specifications?.split(",").map((specify, i) => (
            <span
              className=" bg-yellow-800 text-white px-3 py-1 rounded-lg"
              key={i}
            >
              {specify}
            </span>
          ))}
        </div>
        <h4 className="text-xs font-bold text-blue-950">
          Type is {product[0]?.selectType}
        </h4>
        <h4 className="text-sm font-bold text-gray-600">
          Quality is {product[0]?.quality}
        </h4>
        <h5 className="text-sm font-bold text-gray-400">
          Measurement is {product[0]?.measurement}
        </h5>
        <div className="flex flex-col gap-0">
          <h5 className="text-xs font-bold text-gray-400">
            Name Of The Producing Company is{" "}
            {product[0]?.nameOfTheProducingCompany}
          </h5>
          <h5 className="text-xs font-bold text-gray-400">
            Website Of The Producing Company is{" "}
            {product[0]?.websiteOfTheProducingCompany}
          </h5>
        </div>
        <div className="flex flex-col gap-0">
          <h5 className="text-xs font-bold text-gray-400">
            Name Of The Selling Company is {product[0]?.nameOfTheSellingCompany}
          </h5>
          <h5 className="text-xs font-bold text-gray-400">
            The Selling Company's Website is{" "}
            {product[0]?.theSellingCompanysWebsite}
          </h5>
        </div>
        <p className="text-sm text-wrap font-bold text-gray-600 px-10 py-3">
          {product[0]?.description}
        </p>
        <h1 className="text-xs font-bold text-gray-800">
          Price:{product[0]?.price} NIS
        </h1>
        <h6 className="text-xs font-bold text-red-950">
          Date of Product is {product[0]?.dateCreate}
        </h6>
        <div className="flex gap-5">
          <button
            onClick={() => {
              setA(true);
              setLoading(true);
              handleCreateAddProductToCart();
              setTimeout(() => {
                setA(false);
              }, 3000);
            }}
            className="w-full bg-yellow-700 text-white inline-flex items-center justify-center px-3 py-2 hover:shadow-sm hover:shadow-blue-950 rounded-lg text-xs font-bold"
          >
            {loading ? (
              <div className="w-4 h-4 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
