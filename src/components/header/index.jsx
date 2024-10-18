"use client";
import { AlignJustify, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import ListTools from "../list-tools";
import Box from "../logo";
import ShoppingCart from "../shopping-cart";
import { options, search } from "@/utils";
import {
  fetchProductsAction,
  fetchProductsByTypeProductAction,
} from "@/action";
import { useRouter } from "next/navigation";
import { addToCart } from "@/functions/addProdut";

function Header({ user, profileInfo }) {
  const MenusItems = [
    {
      l: "Home",
      p: "/",
      s: true,
    },
    {
      l: "Login",
      p: "/sign-in",
      s: !user,
    },
    {
      l: "Signup",
      p: "/sign-up",
      s: !user,
    },
  ];
  const [showSheet, setShowSheet] = useState(false);
  const [productType, setProductType] = useState(search);
  
  const handleSearchProducts = async (e) => {
    e.preventDefault();
    location.assign(
      location.origin +
        "/?productType=" +
        (!productType.type ? "all" : productType.type)
    );
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-0">
      <div className="flex items-baseline justify-between">
        <div>
          <Box />
          <AlignJustify
            onClick={() => setShowSheet(true)}
            className="lg:hidden"
          />
          <Sheet open={showSheet} onOpenChange={setShowSheet}>
            <SheetContent className="bg-white w-2/3 lg:hidden" side="left">
              <Link
                onClick={() => setShowSheet(false)}
                className="text-xl font-bold to-gray-600 lg:hidden "
                href={"/"}
              >
                BOX
              </Link>
              <ListTools
                className={
                  "flex flex-col gap-5 mb-1 py-3  border-b-2 border-t-2 border-gray-800"
                }
                MenusItems={MenusItems}
                clsLink={"text-sm font-bold text-gray-900"}
                setShowSheet={setShowSheet}
              />
              {user && (
                <SignOutButton className="text-sm font-bold text-gray-900" />
              )}
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSearchProducts}
            className="flex justify-center items-center"
          >
            <input
              type="text"
              name="productType"
              id="productType"
              value={productType?.type}
              onChange={(e) =>
                setProductType({ ...productType, type: e.target.value })
              }
              placeholder="Search..."
              className="inline-flex px-3 py-1 w-[450px] border-2 border-e-white focus:border-gray-950 focus:bg-blue-50 focus-visible:ring-0 focus-visible:drop-shadow-sm focus-visible:shadow-gray-200"
            />
            <button
              type="submit"
              className="border-2 flex items-center justify-center px-3 py-1 hover:bg-gray-200"
            >
              
              <Search />
            </button>
          </form>
        </div>
        <div className="hidden lg:flex items-center  gap-3 py-3  mr-3">
          <ListTools
            MenusItems={MenusItems}
            clsLink={
              "text-sm font-normal text-gray-500 px-2 py-3 hover:underline hover:text-gray-600"
            }
          />
          <UserButton afterSwitchSessionUrl="/" />
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
}

export default Header;
