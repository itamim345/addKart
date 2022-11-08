import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./Shop.css"

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("Products.json")
        .then(resp => resp.json())
        .then(data => setProducts(data))
    }, []);
  return (
    <div>
      <h2>Our Products</h2>
      <div className="shop-container">
        <div className="all-products">
            {
                products.map((product) => {
                    return <div className='single-product' key={product.id}>
                        <img src={product.img} alt="product-img" />
                        <h3>{product.name}</h3>
                        <p>Stock: {product.stock}</p>
                        <p>Brand: {product.brand}</p>
                        <h4>{product.price}</h4>
                        <button>Buy Now</button>
                    </div>
                })
            }
        </div>
        <div className="cart-products">

        </div>
      </div>
    </div>
  );
}
