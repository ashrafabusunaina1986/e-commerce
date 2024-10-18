import React from "react";
import ListProducts from "../list-products";

function CommonViewProducts({ user, products, option, path }) {
  // console.log(products);
  return (
    <div className="w-11/12">
      <div className="w-full flex flex-col items-center justify-around">
        <ListProducts
          products={products}
          message={`Products of ${option} is not found`}
          user={user}
          path={path}
        />
      </div>
    </div>
  );
}

export default CommonViewProducts;
