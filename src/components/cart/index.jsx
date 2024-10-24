"use client";
import React, { useEffect, useState } from "react";
import CommonCard from "../common-card";
import Cards from "../card";
import { Button } from "../ui/button";

function Cart({ adds }) {
  const log = console.log;
  const [price, setPrice] = useState(0);
  console.log(adds);
  useEffect(() => {
    let sum = 0;
    const sumPrice = () => {
      adds?.forEach((add) => (sum += Number(add?.price)));
      return sum;
    };
    setPrice(sumPrice());
  }, [adds]);
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex gap-10">
        <h1>
          Price of goods is{" "}
          <span className="text-sm font-bold text-red-400">{price}</span>
        </h1>
        <button className="text-sm font-bold text-white bg-yellow-600 px-3 py-1 rounded-full hover:shadow-sm hover:shadow-gray-700">
          Buy
        </button>
      </div>
      {adds?.length > 0 ? (
        adds.map((add, id) => {
          return (
            <div className="w-full" key={id}>
              <Cards productAdd={add} />
            </div>
          );
        })
      ) : (
        <h1 className="text-xl font-extrabold flex items-center justify-center">
          products not found
        </h1>
      )}
    </div>
  );
}

export default Cart;
