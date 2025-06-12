import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {

    let btn_Name = "Login";
    const [btnName, setbtnName] = useState("Login");

    return (
        <div className="header">
            <div>
                <img className= "logo" src={LOGO_URL}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="Login-btn" 
                    onClick={() => {
                        setbtnName("Logout");
                        console.log(btnName);
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;