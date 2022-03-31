import React, { useContext } from "react";
import { Product } from "../Context";

const SingleProd = ({ item }) => {
  const { img, price } = item;
  const { cart, setCart } = useContext(Product);

  return (
    <div className="single">
      <div className="item-img">
        <img src={img} alt="bookpicture" />
      </div>
      <div className="item-price">{price} $</div>
      <div className="item-btn">
        {cart.includes(item) ? (
          <button
            style={{
              backgroundColor: "#de1507",
              color: "white",
              border: "none",
            }}
            onClick={() => {
              setCart(cart.filter((n) => n.id !== item.id));
            }}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            style={{ backgroundColor: "green", color: "white", border: "none" }}
            onClick={() => {
              setCart([...cart, item]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
      {/* <div className="inc-dec">
        <div className="inc">+</div>
        <div className="inc">-</div>
      </div> */}
    </div>
  );
};

export default SingleProd;
