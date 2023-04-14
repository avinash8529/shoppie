import React from 'react'

import './index.scss';

const Navigation = () => {

    return(
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html"><img src="https://pbs.twimg.com/profile_images/1610235070589304837/sL2eCR-X_400x400.jpg" alt="RedStore" width="125px" /></a>
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="product.html">Products</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="account.html">Account</a></li>
                        </ul>
                    </nav>
                    <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
                    <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon"  />
                </div>
            </div>
    )
}
export default Navigation;