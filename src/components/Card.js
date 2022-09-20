import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';


import './Card.css';

const Cards = ({ item, handleClick }) => {
  const { title, price, description, image, category, rating, size, stock } =
    item;

    const [quantity, setQuantity] = useState(0);

    const handleDecrement = () => {
      setQuantity(quantity - 1);
      if (quantity<= 0) {
        alert('Select atleast one')
    }
      console.log('clicked');
    };
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
      console.log('clicked');
    };
  
  // const [data, setData] = useState(list);
  // const filterResult = (item) => {
  //     const result= list.filter((curData) => {
  //         return curData.size === item;
  //     });
  //     setData(result);
  // }
  // const [localProducts, setLocalProducts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   setLocalProducts(productList);
  // }, [productList]);


  // useEffect(() => {
  //   // search item
  //   if (searchTerm.length > 0) {
  //     setLocalProducts(
  //       productList?.filter((item) => item?.title.includes(searchTerm))
  //     );
  //   } else {
  //     setLocalProducts(productList);
  //   }
  // }, [searchTerm]);

  // const onFilterValueChanged = (val) => {
  //   console.log('val', val);
  //   if (val) {
  //     setLocalProducts(productList?.filter((item) => item?.size === val));
  //   }
  // };

  // const onFilterCategoryChanged = (val) => {
  //   console.log('val', val);
  //   if (val) {
  //     setLocalProducts(
  //       productList?.filter((item) => item?.category?.toLowerCase() === val)
  //     );
  //   }
  // };

  // console.log('searchTerm', searchTerm);
  return (
    <>
    
{/* 
<Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onFilterValueChanged={onFilterValueChanged}
            onFilterCategoryChanged={onFilterCategoryChanged}
          /> */}
      <div className="cards">
        <div className="image_box">
          {' '}
          <img src={image} alt="" />
          <h5>
            Name: <br />
            <span className="title">{title}</span>
          </h5>
          <h5>Price: {price} $</h5>
          <h5>
            Quantity:{' '}
            <div>
              <button onClick={handleDecrement}>-</button>
              <button>{quantity}</button>
              <button onClick={handleIncrement}>+</button>
            </div>
          </h5>
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
