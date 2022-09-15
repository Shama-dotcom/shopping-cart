import React from "react";
import "./Navbar.css";
import { FaCartPlus } from 'react-icons/fa';


const Navbar = ({ setShow, size }) => {
    
    // function onFilterValueChanged(event) {
    //     console.log(event.target.value)
    // }
    // const [SearchTerm, setSearchTerm] = useState('')
  return (
    <>
    
    <nav>

     
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Product List
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          
          <span>Add to Cart<FaCartPlus/><span className="total-size">{size}</span></span>
        </div>
      </div>
    </nav></>
    
  );
};

export default Navbar;