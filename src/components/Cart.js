import React, { useContext, useEffect, useState } from "react";
import { Product } from "../Context";
import SingleProd from "./SingleProd";

function Cart() {
  const { cart } = useContext(Product);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <div className="total-price">Total : {total}$</div>
      {cart.length === 0 ? (
        <div className="no-item">No Items In Cart</div>
      ) : null}
      <div className="wrapper">
        {cart.map((item) => (
          <SingleProd key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Cart;
