import Link from "next/link";
import React from "react";

export default function Box() {
  return (
    <Link className="text-xl font-bold to-gray-600 hidden lg:flex" href={"/"}>
      BOX
    </Link>
  );
}
