"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import NewProduct from "../new-product";
import Link from "next/link";
import { CarFront, CarTaxiFront, LucideShoppingCart } from "lucide-react";
import { addToCart } from "@/functions/addProdut";
import { fetchAddsFromCart } from "@/action";
import { AddContext } from "@/context/AddToCart";
import { ipd } from "../view-product";
import axios from "axios";

function ShoppingCart() {
  const { add, setAdd } = useContext(AddContext);
  const [str, setStr] = useState("");

  useEffect(() => {
    setAdd(JSON.parse(localStorage.getItem("addCart")));
    
  }, []);
    console.log(add,add?.length)
  
  
  
  return (
    <div className=" -mb-4 lg:mb-0 flex items-center justify-between">
      <NewProduct />
      <Link
        href={`/cart?ua_=${str}`}
        className="inline-flex relative border-2 px-3 py-1 rounded-full bg-red-200 shadow-sm shadow-red-400 hover:shadow-md hover:shadow-red-500 cursor-pointer mr-3"
      >
        {add?.length >= 0 && (
          <span className="absolute left-[35%] -top-4 text-red-950 font-bold text-xl ">
            {add.length}
          </span>
        )}
        <Image
          src={"/shopping-cart.png"}
          width={250}
          height={250}
          className="object-cover w-5 h-5"
          alt="Shopping Cart"
        />
      </Link>
    </div>
  );
}

export default ShoppingCart;
