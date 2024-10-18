"use client";
import React, { useEffect, useState } from "react";
import CommonViewProducts from "../common-view-products";

function P({ products, option }) {
  useEffect(() => {
    console.log(sessionStorage.getItem("a"));
  }, []);
  return <CommonViewProducts products={products} option={option} />;
}

export default P;
