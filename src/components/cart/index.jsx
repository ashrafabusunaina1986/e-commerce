"use client";
import React, { useEffect, useState } from "react";
import CommonCard from "../common-card";
import Cards from "../card";
import { Button } from "../ui/button";
import { redirect, useRouter } from "next/navigation";

function Cart({ user }) {
  const log = console.log;
  const [adds, setAdds] = useState([]);
  const [price, setPrice] = useState(0);
  const router = useRouter();
  useEffect(() => {
    setAdds(JSON.parse(localStorage.getItem("addCart")));
  }, []);

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
        <button
          onClick={() => router.push(!user ? "/sign-in" : "/")}
          className="text-sm font-bold w-max h-max text-white bg-yellow-600 px-3 py-1 rounded-full hover:shadow-sm hover:shadow-gray-700"
        >
          Buy
        </button>
        <h5 className="text-xs text-red-950">
          Number of items are {adds.length}
        </h5>
      </div>
      {adds?.length > 0 ? (
        adds.map((add, id) => {
          return (
            <div className="w-full" key={id}>
              <Cards productAdd={add} user={user} />
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
