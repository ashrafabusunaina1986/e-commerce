"use client";
import {
  initialProductFormItemsControls,
  productFormItemsControls,
  valid,
} from "@/utils";
import React, { useEffect, useState } from "react";
import CommonForm from "../common-form";
import { createClient } from "@supabase/supabase-js";
import { creatProductAction } from "@/action";
import { useRouter } from "next/navigation";

export const supabaseClient = createClient(
  "https://kixfgqknzwlvvqtegrjq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpeGZncWtuendsdnZxdGVncmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNTc0NDQsImV4cCI6MjAzNjczMzQ0NH0.CvILeU__GAQYwX4w1HmTaKikdmGrTCGwpAN4R0VJgT0"
);

function NewProductS({ user }) {
  // console.log(user);
  const [loading, setLoading] = useState(false);
  const [productDataForm, setProductDataForm] = useState(
    initialProductFormItemsControls
  );
  const router = useRouter();
  const [selectFile, setSelectFile] = useState(null);
  const [selectChange, setSelectChange] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const f = {
        image: URL.createObjectURL(file),
        name: file?.name,
        file: file,
      };
      setSelectFile(f);
      setProductDataForm({ ...productDataForm, image: file?.name });
    }
  };
  const uploadFilesupabas = async () => {
    const { data, error } = await supabaseClient.storage
      .from("job-board/public")
      .upload(selectFile?.file?.name, selectFile?.file, {
        upsert: false,
        cacheControl: "3600",
      });

    return { data, error };
  };
  const deleteFile = async () => {
    const { data, error } = await supabaseClient.storage
      .from("job-board")
      .remove("public/" + productDataForm.image);

    return { data, error };
  };
  const handleCreateProductAction = async () => {
    if (selectFile?.file) {
      let { data, error } = await uploadFilesupabas();
      if (error) {
        setLoading(false);
        return alert("Imsge :" + error.message);
      }

      if (data) {
        let d = {
          userId: user?.id,
          email: user?.emailAddresses[0]?.emailAddress,
          nameProduct: productDataForm?.nameProduct,
          image: productDataForm?.image,
          price: productDataForm?.price,
          description: productDataForm?.description,
          measurement: productDataForm?.measurement,
          specifications: productDataForm?.specifications,
          nameOfTheProducingCompany: productDataForm?.nameOfTheProducingCompany,
          websiteOfTheProducingCompany:
            productDataForm?.websiteOfTheProducingCompany,
          nameOfTheSellingCompany: productDataForm?.nameOfTheSellingCompany,
          theSellingCompanysWebsite: productDataForm?.theSellingCompanysWebsite,
          made: productDataForm?.made,
          quality: productDataForm?.quality,
          selectType: productDataForm?.selectType,
          dateCreate: new Date().toDateString(),
          createdAt: Date.now().toString(),
        };
        const r = await creatProductAction(d, "/new-product");
        // console.log(r);
        if (!r.m) {
          alert("Error:duplicate name product");

          deleteFile()
            .then((r) => console.log(r))
            .catch((e) => console.log(e));
        } else {
          setProductDataForm(initialProductFormItemsControls);
          router.push("/");
        }
      }
    }
    setLoading(false);
  };
  return (
    <div className="w-11/12">
      <CommonForm
        loading={loading}
        setLoading={setLoading}
        action={handleCreateProductAction}
        btnDisable={!valid(productDataForm)}
        selectFile={selectFile}
        data={productDataForm}
        setData={setProductDataForm}
        btnText={"Add Product"}
        itemsControls={productFormItemsControls}
        input_className="inline-flex border-2 border-gray-600 px-3 py-1 rounded-lg focus:bg-blue-50 focus-visible:ring-0 w-full md:w-2/4"
        li_className={"flex mx-auto w-full md:w-2/4"}
        div_className="flex flex-col items-center gap-1 text-md font-bold w-full"
        ta_className={`flex flex-col items-center gap-1 text-md font-bold w-full`}
        lta_className={`flex mx-auto w-full md:w-2/4`}
        ta_i_className={`inline-flex border-2 border-gray-600 px-3 py-1 rounded-lg focus:bg-blue-50 focus-visible:ring-0 w-full h-[150px] resize-none md:w-2/4`}
        form_className="w-11/12 mx-auto flex flex-col gap-5"
        btn_className={`bg-gray-700 px-5 py-2 rounded-xl flex disabled:opacity-40 disabled:shadow-none items-center justify-center w-full text-white font-bold hover:shadow-md hover:shadow-gray-950`}
        btn_div_className={"md:w-2/4 md:mx-auto "}
        sel_ClassName={"md:w-2/4 md:mx-auto relative font-bold"}
        file_className={
          "relative border-2 border-dashed flex items-center justify-center w-full md:w-2/4 aspect-video mx-auto h-[200px] rounded-lg"
        }
        sfile_className={
          "flex items-center justify-center w-full  h-[200px]  aspect-video rounded-lg"
        }
        handleFileChange={handleFileChange}
      />
      <div className=""></div>
    </div>
  );
}

export default NewProductS;
