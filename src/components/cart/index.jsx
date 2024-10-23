import React from 'react'

function Cart({adds}) {
    console.log(adds)
  return (
    <div>
      {adds?.length>0 ?
      adds.map((add,id)=><div className="" key={id}>
        {add?.nameProduct}
      </div>):<h1 className="">products not found</h1>}
    </div>
  )
}

export default Cart
