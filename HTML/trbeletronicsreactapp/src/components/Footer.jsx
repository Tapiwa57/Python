import React from "react";


const Footer = () => (
    <footer>
        <div class="footer-container">
            <div class="footer1">
                <h2>Product</h2>
                <p>Gaming and Other accessories</p>
                <p>Tablets and cellphones</p>
                <p>Desktop and laptop</p>
            </div>
            <div>
                <input type="search" id="search-bar" placeholder="search..."/>
                <br/>
                <br/>
                <button id="search-btn">Search</button>
                <br/>
                <h2 class="follow">Follow Us On</h2>
                <br/>
                <div class="social-icon">
                    <img src="/imgs/fa6-brands_square-x-twitter.svg" alt="X"/>
                    <a href="https://www.instagram.com/trbelectronics/?fbclid=IwY2xjawK_px1leHRuA2FlbQIxMQBicmlkETFEamN5ODdwUXV2RE9YRXI2AR7nh_fjbysFOWmW6qKehQqSwIEP5NYInAkAjSKwtOEDtXbFumBi3QoqFLe5_Q_aem_7GJn09LcO-xwBqU8Vxg5Mg"><img src="/imgs/skill-icons_instagram.svg" alt="instagram"/></a>
                    <a href="https://wa.me/message/MREUCQTI6PE6N1"><img src="/imgs/Vector-Whatsapp.svg" alt="Whatsapp"/></a>
                    <a href="https://www.facebook.com/profile.php?id=61575966909603&sk=about"><img src="/imgs/logos_facebook.svg" alt="facebook"/></a>
                </div> 
                <br/>
                <div class="sign">
                    <button>Sign Up</button>
                    <img src="/imgs/material-symbols--person.svg" alt="person"/>
                    <button>Sign In</button>
                </div>
                
            </div>
            <div>
                <h2>About Us</h2>
                <p>Our story</p>
                <p>Management</p>
                <p>Location</p>
            </div>
        </div> 
    </footer>

);


export default Footer