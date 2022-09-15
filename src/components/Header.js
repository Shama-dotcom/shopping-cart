import React from 'react'

const Header = () => {
  return (
    <div>

        
<div>
          <select name="L" onChange={onFilterValueChanged}>
            <option>Select Category</option>
            {/* <option onClick={() => fiterResult('shirt')}>Shirt</option> */}
            <option>Jacket</option>
            <option>Electronics</option>
            <option>Accessories</option>
            <option>Hoodies</option>
          </select>

          <select>
            <option>Select Size</option>
            <option>S</option>
            <option>M</option>

            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="searchInput_Container">
          <input
            id="list"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
    </div>
  )
}

export default Header