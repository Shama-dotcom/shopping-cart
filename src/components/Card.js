import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './Card.css';


const Cards = ({ item, handleClick }) => {
  const { title, price, description, image, category, rating, size, stock } =
    item;

    // const [data, setData] = useState(list);
    // const filterResult = (item) => {
    //     const result= list.filter((curData) => {
    //         return curData.size === item;
    //     });
    //     setData(result);
    // }



  return (
    <>
      
      <div className="cards">
      
        <div className="image_box">
          {' '}
          <img src={image} alt="" />
          <h5>
            Name: <br />
            <span className="title">{title}</span>
          </h5>
          <h5>Price: {price} $</h5>
          <button onClick={() => handleClick(item)}>
            Add to Cart <FaCartPlus />
          </button>
        </div>
        <div className="details">
          <div>
            <h5>
              Category: <br />
              <span className="category">{category}</span>
            </h5>
            <h5>
              {' '}
              Description: <br />{' '}
              <span className="description">{description}</span>
            </h5>
            <h5>
              {' '}
              Size: <br />
              <span className="size"> {size}</span>
            </h5>
            <h5>
              Stock: <br />
              <span className="stock">{stock}</span>
            </h5>
            <h5>
              Rating: <br />
              <h4 className="rate">{rating}</h4>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
