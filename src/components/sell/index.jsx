"use client";
import {
  load,
  countryProps,
  stateProps,
  cityProps,
  getDataCountrys,
  getRuteCountryImg,
  getDataStates,
  getDataStatesByCountry,
  getDataCitys,
  getDataCitysByStateAndCountry,
} from "country-state-city-nextjs";

import { AddContext } from "@/context/AddToCart";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";

function Sell({ user, product }) {
  const { add, setAdd } = useContext(AddContext);
  const [dataform, setDataForm] = useState({
    name: "",
    phone: "",
  });
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const change = (e) => {
    setDataForm({
      ...dataform,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const fetchDataCitys = async () => {
      const dcities = await getDataCountrys({ text: "Palestine" });
      console.log(await dcities);
      return await dcities;
    };
    fetchDataCitys();
  }, []);

  const handleSell = () => {
    if (Object.values(dataform).every((item) => item.trim() !== "")) {
      let addCart = JSON.parse(localStorage.getItem("addCart"));
      if (addCart?.length === product?.length) {
        localStorage.setItem("addCart", JSON.stringify([]));
        setAdd([]);
      } else {
        let new_addCart = addCart?.filter((add) => add?._id !== product?._id);
        localStorage.setItem("addCart", JSON.stringify(new_addCart));
        setAdd(new_addCart);
      }
      setOpenDialog(true);
    }
  };
  // useEffect(() => {
  //   console.log(
  //     product,
  //     Object.values(dataform).every((item) => console.log(item) && item !== "")
  //   );
  // }, [dataform]);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <form
        action={handleSell}
        className="w-max flex flex-col gap-7 items-center justify-center border-2 rounded-2xl bg-black text-white opacity-80 px-10 py-5 font-bold shadow-sm shadow-blue-500"
      >
        <h1 className="text-xl font-extrabold text-yellow-800 shadow-md shadow-white rounded-full px-4 py-1">
          client information
        </h1>
        {/* <div className="flex items-baseline justify-between w-full px-0 py-2"> */}
        {/* <label>Name</label> */}
        <input
          type="name"
          name="name"
          placeholder="Enter Name..."
          className="bg-transparent px-2 py-1 border-b-[1px]"
          onChange={change}
        />
        {/* </div>
        <div className="flex items-baseline justify-between w-full px-0 py-2"> */}
        {/* <label>Phone Number</label> */}
        <input
          type="phone"
          name="phone"
          placeholder="Enter Phone..."
          className="bg-transparent px-2 py-1 border-b-[1px]"
          onChange={change}
        />
        {/* </div> */}
        {/* <div className="flex items-center justify-center w-full px-0 py-2"> */}
        <button className="text-sm font-bold text-white hover:shadow-sm opacity-80 hover:shadow-red-700 bg-red-950 px-5 py-3 rounded-full">
          Confirm
        </button>
        {/* </div> */}
      </form>
      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <DialogContent className=" ltr:flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold text-white">
              thank you for sell from website. <br />
              We will contact you and inform you of the details
            </h1>
          </div>
          <button
            onClick={() => {
              router.push("/");
              setOpenDialog(false);
            }}
            className="w-max text-sm font-bold text-white hover:shadow-sm opacity-80 hover:shadow-red-700 bg-red-950 px-5 py-3 rounded-full"
          >
            Confirm
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Sell;
