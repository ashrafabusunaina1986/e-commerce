"use client";
import { AddContext } from "@/context/AddToCart";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useContext, useEffect } from "react";

function Sell({ user, product }) {
  const { add, setAdd } = useContext(AddContext);
  //   console.log(product);
  const handleSell = () => {
    let addCart = JSON.parse(localStorage.getItem("addCart"));
    if (addCart?.length === product?.length) {
      localStorage.setItem("addCart", JSON.stringify([]));
      setAdd([]);
    } else {
      let new_addCart = addCart?.filter((add) => add?._id !== product?._id);
      localStorage.setItem("addCart", JSON.stringify(new_addCart));
      setAdd(new_addCart);
    }
  };
  useEffect(() => {}, []);
  return (
    <div>
      <button
        onClick={handleSell}
        className="text-sm font-bold text-white hover:shadow-sm hover:shadow-gray-950 bg-red-950 px-5 py-3 rounded-full"
      >
        Confirm
      </button>
    </div>
  );
}

export default Sell;
