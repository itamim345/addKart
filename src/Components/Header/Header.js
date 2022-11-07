import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <div>
        <div className='navbar'>
            <nav>
                <div className="logo">addKart</div>
                <div className="menu">
                    <a href='/home'>HOME</a>
                    <a href='/products'>Product</a>
                    <a href='/contact'>Contact</a>
                </div>
            </nav>
        </div>
    </div>
  );
}
