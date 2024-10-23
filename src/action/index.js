"use server";

import db from "@/db";
import Carts from "@/models/cart";
import Products from "@/models/product";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
//create prosduct
export const creatProductAction = async (data, p) => {
  await db();
  const d = await Products.find({ nameProduct: data?.nameProduct });
  if (d.length === 0) {
    await Products.create(data);
    revalidatePath(p);
    return { m: true, d };
  } else {
    return { m: false, d };
  }
};
//fetch products by user
export const fetchProductsByUserAction = async (userId) => {
  await db();
  const products = await Products.find({ userId: userId });
  return JSON.parse(JSON.stringify(products));
};
//fetch all products
export const fetchProductsAction = async () => {
  await db();
  const products = await Products.find({});
  return JSON.parse(JSON.stringify(products));
};
//fetch products by user And type
export const fetchProductsByUserAndTypeAction = async (userId, type) => {
  await db();
  const products = await Products.find({ userId: userId, selectType: type });
  return JSON.parse(JSON.stringify(products));
};
//fetch products by product string
export const fetchProductsByTypeProductAction = async (type) => {
  await db();
  const productsOfType = await Products.aggregate([
    {
      $search: {
        index: "selectType",
        text: {
          query: type,
          path: {
            wildcard: "*",
          },
        },
      },
    },
  ]);
  return JSON.parse(JSON.stringify(productsOfType));
};
//create add product to cart
export const createAddProductToCart = async (data, path) => {
  await db();
  await Carts.create(data);
  revalidatePath(path);
  return true;
};

//fetch adds from cart
export const fetchAddsFromCart = async (systemId) => {
  await db();
  const adds = await Carts.find({ systemId: systemId });
  return JSON.parse(JSON.stringify(adds));
};

export const getProductsAddsAction = async (systemId) => {
  await db();
  const r = await Carts.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "pa",
      },
    },
    {
      $match: { systemId: systemId},
    },
  ]);
};

export const getUserAgentAction = async () => {
  const userAgent = await fetch("/api");
  return userAgent;
};
