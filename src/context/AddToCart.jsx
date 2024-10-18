"use client";
import { addToCart } from "@/functions/addProdut";
import React, { createContext, useEffect, useState } from "react";

export const AddContext = createContext();
function AddToCart({ children }) {
  const [add, setAdd] = useState([]);

  return (
    <AddContext.Provider value={{ add, setAdd }}>
      {children}
    </AddContext.Provider>
  );
}

export default AddToCart;
