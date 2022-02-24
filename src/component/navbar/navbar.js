import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () =>{

    console.log("navbar.js start running");

    return(
        <div className="nav">
            <ul className="ulLink">
                <li>
                    <Link to="/">Registration</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;