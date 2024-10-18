"use client";
import Link from "next/link";
import React from "react";
import CommonCard from "../common-card";
import { options } from "@/utils";
import View_link from "../viewLink";

function ListProducts({ user, products, message, path }) {
  return <View_link products={products} message={message} />;
}

export default ListProducts;
