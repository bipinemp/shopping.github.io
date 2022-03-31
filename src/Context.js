import { createContext, useState } from "react";

export const Product = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <Product.Provider value={{ cart, setCart }}>{children}</Product.Provider>
  );
};

export default Context;
