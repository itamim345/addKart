import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./Shop.css"

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("Products.json")
        .then(resp => resp.json())
        .then(data => setProducts(data))
    }, []);

    function handleAddtoCart(product){
        //console.log(product);
        const newCart = [...cart, product]
        setCart(newCart) 
    }

  return (
    <div>
      <div className="container">
        <div className="all-products">
            {
                products.map((product) => {
                    return <div className='single-product' key={product.id}>
                        <img src={product.img} alt="product-img" />
                        <h3>{product.name}</h3>
                        <p>Stock: {product.stock}</p>
                        <p>Brand: {product.brand}</p>
                        <h4>{product.price}</h4>
                        <button onClick={() => {handleAddtoCart(product)}}>Buy Now</button>
                    </div>
                })
            }
        </div>
        <div className="cart-products">
            <h2>CART ITEMS</h2>
            <p>{cart.length}</p>
        </div>
      </div>
    </div>
  );
}
