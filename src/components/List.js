import React from "react";
import logo from './sky1.jpg'
import { Link } from "react-router-dom";
import './List.css';
function List(){
    return(<>
<header>
    <div className="Container Container-flex">
        <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
        </div>
        <nav className="navbar">
            <div className="List">
                <Link to='/' className="listItem">Home</Link>
                <Link to='/about' className="listItem">About</Link>
                <Link to='/course' className="listItem">Courses</Link>
                <Link to='/contact' className="listItem">Contact</Link>
            </div>
        </nav>
    </div>
</header>
    </>)
}
export default List