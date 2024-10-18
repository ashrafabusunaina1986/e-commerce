"use client";
import { options } from "@/utils";
import { ArrowBigDown, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CommonForm({
  loading,
  setLoading,
  action,
  itemsControls,
  data,
  setData,
  btnText,
  btnType,
  btnDisable,
  div_className,
  input_className,
  file_className,
  handleFileChange,
  sfile_className,
  selectFile,
  ta_className,
  btn_div_className,
  ta_i_className,
  btn_className,
  form_className,
  li_className,
  sel_ClassName,
  lta_className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState(false);
  const elementForm = (i, itemControl) => {
    let content = null;
    const select = (
      <div key={i} className={sel_ClassName}>
        <label htmlFor={itemControl.selectType}>{itemControl.label}</label>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          className="flex items-center justify-between bg-gray-100 active:bg-gray-100 active:text-black px-5 py-3 w-full rounded-md font-bold"
        >
          <h1 className="text-lg font-bold text-blue-900">
            {data?.selectType ? data?.selectType : "Select type..."}
          </h1>
          {isOpen ? <ArrowBigDown /> : <ArrowBigRight />}
        </button>
        {isOpen && (
          <div className="absolute left-0 top-20 flex flex-col gap-0 z-50 bg-gray-100 rounded-lg w-full font-bold">
            {options.map((option, i) => (
              <div
                key={i}
                onClick={() => {
                  setData({ ...data, selectType: option.l });
                  setIsOpen(false);
                }}
                className=" inline-flex items-center justify-between px-6 py-3 rounded-lg bg-transparent hover:bg-blue-100 cursor-pointer"
              >
                <h1>{option.l}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    );
    const input = (type) => {
      let input_content = null;
      if (type === "text") {
        input_content = (
          <div key={i} className={div_className}>
            <label className={li_className} htmlFor={itemControl?.name}>
              {itemControl?.label}
            </label>
            <input
              type="text"
              id={itemControl?.name}
              name={itemControl?.name}
              placeholder={itemControl?.placeholder}
              value={data[itemControl?.name]}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              className={input_className}
            />
          </div>
        );
      }
      if (type === "file") {
        input_content = (
          <div key={i}>
            <label
              onMouseOver={() => setImg(true)}
              onMouseOut={() => setImg(false)}
              htmlFor={itemControl?.name}
              className={file_className}
            >
              <input
                type="file"
                id={itemControl?.name}
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png"
                className="hidden"
              />
              <div
                className={`${
                  img ? "flex" : "hidden"
                } absolute px-3 py-1 left-0 top-0 bg-black text-white text-sm font-bold rounded-xl`}
              >
                type image (.jpg,.jpeg,.png)
              </div>
              <span>
                {selectFile ? (
                  <Image
                    src={selectFile?.image}
                    width={1000}
                    height={1000}
                    alt={selectFile?.name}
                    className={sfile_className}
                  />
                ) : (
                  "Select Image"
                )}
              </span>
            </label>
          </div>
        );
      }

      return input_content;
    };
    const textarea = (
      <div key={i} className={ta_className}>
        <label htmlFor={itemControl.name} className={lta_className}>
          {itemControl.label}
        </label>
        <textarea
          id={itemControl.name}
          name={itemControl.name}
          placeholder={itemControl.placeholder}
          className={ta_i_className}
          value={data[itemControl.name]}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </div>
    );
    switch (itemControl.commonType) {
      case "input":
        content = input(itemControl?.type);
        break;
      case "textarea":
        content = textarea;
        break;
      case "select":
        content = select;
        break;
      default:
        content = input(itemControl?.type);
        break;
    }
    return content;
  };
  return (
    <form
      className={form_className}
      action={() => {
        setLoading(true);
        action();
      }}
    >
      {itemsControls.map((itemControl, i) => elementForm(i, itemControl))}
      <div className={btn_div_className}>
        <button
          type={"submit" || btnType}
          disabled={false || btnDisable || loading}
          className={btn_className}
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
          ) : (
            btnText
          )}
        </button>
      </div>
    </form>
  );
}

export default CommonForm;
