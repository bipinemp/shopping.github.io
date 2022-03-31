import React, { useState } from "react";
import list from "../Data";
import SingleProd from "./SingleProd";

function Home() {
  const [product, setProduct] = useState(list);

  const filterProduct = (prod) => {
    const updatedList = list.filter((currProd) => {
      return currProd.category === prod;
    });
    setProduct(updatedList);
  };

  return (
    <div>
      <div className="container-category">
        <button onClick={() => setProduct(list)}>All Product</button>
        <button onClick={() => filterProduct("men")}>Men</button>
        <button onClick={() => filterProduct("women")}>Women</button>
        <button onClick={() => filterProduct("bag")}>Bag</button>
        <button onClick={() => filterProduct("jewellery")}>jewellery</button>
        <button onClick={() => filterProduct("Device")}>Devices</button>
      </div>
      <div className="wrapper">
        {product.map((item) => (
          <SingleProd key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
