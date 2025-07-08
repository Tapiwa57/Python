import React from "react";



const NavBar = () => (
    <header>
        <nav>
            <img class="logo" src="/imgs/TRB-Electronics-Logo.png" alt="TRB Electronics logo"></img>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About Us</li>
                <li><img src="/imgs/flag--zw-4x3.svg" alt="Zimbabwe flag"/></li>
                <li><img src="/imgs/material-symbols--person.svg" alt="person"/></li>
                <li>Sign Up</li>
                <li>Sign In</li>
                <li><img src="/imgs/mdi--cart.svg" alt="cart"/></li>  
            </ul>
        </nav>
    </header>
);

export default NavBar;