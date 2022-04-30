import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
const Navbar = () => {
    const [state,setState]=useState(true)
    return (
        <nav className="navbarr">
            <div className="container">
                <div className="navbar_container">

                    <ul className="navbar_left">
                        <div className="navbar_left-logo">
                            <img src="/image/logo.png" alt="logo" />
                        </div>
                    </ul>
                    {state ? <ul className="navbar_right">
                        <li><a href="">Home</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>

                    </ul> : ''}
                       </div>

            </div>
            <div className="toggle" onClick={() =>setState(!state)}>
                 <FaAlignJustify />
            </div>
        </nav>
    )
}
export default Navbar;