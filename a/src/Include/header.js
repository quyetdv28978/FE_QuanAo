import { Link } from 'react-router-dom'
import clsx from "clsx"
import headerCss from "../css/include/header.module.css"
import MobileNavbar from "../Component/home/mobileNav.js"
import CartAnimation from '../Component/cartAnimation'

import iconUser from "../images/userIcon.png"
import iconCart from "../images/iconCart.png"
import navbar from "../images/navbar.png"
import meo from '../images/images.jpg';
import { useState } from 'react'

// Handle select icon accout

function Header({ value }) {
    const [valueSelect, setValueSelect] = useState("");
    console.log("co hien khong");
    console.log(value);

    function handleIconAccout(e) {
        let locationU = window.location.href;
        window.location.href = locationU.substring(0, locationU.lastIndexOf("/")) + e.target.value
        console.log(window.location.href);
        return e.target.value;
    }

    return (
        <div className={clsx(headerCss.header)}>
            <div className={clsx(headerCss.header_nav)}>
                <div className={clsx(headerCss.header_nabav)}>
                    <img src={meo} alt='img' style={{ width: "30px" }}></img>
                    <Link className={clsx(headerCss.header_nabavLink)} to="/Home">Home</Link>
                    <Link className={clsx(headerCss.header_nabavLink)} to="/Products">Shop</Link>
                    <Link className={clsx(headerCss.header_nabavLink)} to="/Contact">Contact</Link>
                    <Link className={clsx(headerCss.header_nabavLink)} to="/AboutMe">About me</Link>
                </div>
                <div className={clsx(headerCss.header_icon)}>
                    <span className={clsx(headerCss.iconUser)}><img src={iconUser} alt='img'></img>
                        <select style={{ width: '20px' }} value={valueSelect} onChange={(e) => handleIconAccout(e)}>
                            <option></option>
                            <option value={"/User"}>Tài khoản của tôi</option>
                            <option value={"/signin"}>Đăng xuất</option>
                        </select>
                        {/* {valueSelect && <Link to={`${valueSelect}`}></Link>} */}
                    </span>

                    <label htmlFor='input_CartAnimation'
                        onClick={() => {
                            document.getElementById("inputClose_CartAnimation").checked = false
                        }}
                    >
                        <img src={iconCart} alt='img'></img>
                        <b className={clsx(headerCss.iconCart)}>{value}</b>
                    </label>
                    <input type='checkbox' id='input_CartAnimation' className='input_CartAnimation' ></input>
                    <input type='checkbox' id='inputClose_CartAnimation' className='inputClose_CartAnimation'></input>
                    <CartAnimation></CartAnimation>

                </div>
                <label htmlFor='checkbox' className={clsx(headerCss.navbarMobile_show)}>
                    <img src={navbar} alt='img'></img></label>
            </div>
            <input id='checkbox' type='checkbox' style={{ display: "none" }} className={clsx(headerCss.inputCheck)}></input>
            {/* Mobile */}
            <div className={clsx(headerCss.navbarMobile)}>
                <div className={clsx(headerCss.navbarMobile_nav)}>
                    <MobileNavbar></MobileNavbar>
                </div>
            </div>

        </div>
    )
}

export default Header