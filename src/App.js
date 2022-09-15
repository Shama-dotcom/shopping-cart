import React, { useState } from 'react';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Cart from './components/cart';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <Navbar setShow={setShow} size={cart.length} />
          {show ? (
            <Product handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
        </React.Fragment>

        <Routes>
          <Route exact path="/checkout" element={<CheckoutPage />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
