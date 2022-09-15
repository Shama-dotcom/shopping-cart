import React, {useState} from "react";
import list from "../ProductList";
import Cards from "./Card";
import "./Product.css";

const Product = ({ handleClick }) => {

  return (
    <section>
      
        
        
      {list.map((item) => (

        <Cards key={item.id} item={item} handleClick={handleClick}></Cards>
      ))}
    </section>
  );
};

export default Product;