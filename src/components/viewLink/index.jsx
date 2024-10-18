import React from 'react'
import CommonCard from '../common-card'
import Link from 'next/link'

export default function View_link({products,message}) {
  return (
    <div
      className={
        products?.length === 0
          ? "flex items-center justify-center w-full text-2xl font-extrabold text-gray-900"
          : `w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3`
      }
    >
      {products && products.length > 0
        ? products.map((product, i) => (
            <Link
              key={i}
              href={`/products/${product?.selectType
                ?.replaceAll(" ", "-")
                .toLowerCase()}/${product?._id}`}
            >
              <CommonCard
                product={product}
                className={
                  "w-full flex flex-col px-3 py-2 bg-gray-100 border-2 hover:shadow-lg hover:shadow-blue-900 transition duration-300"
                }
              />
            </Link>
          ))
        : message}
    </div>
  )
}
