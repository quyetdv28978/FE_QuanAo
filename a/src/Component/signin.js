import { Link } from 'react-router-dom'
import logo from '../images/googleImage.png'
import clsx from "clsx"
import cssSignin from "../css/signin.module.css";

import React from 'react'

function Signin() {
    return (
        <div className={clsx(cssSignin.bgSignin)}>
        <div className={clsx(cssSignin.signin)}>

            <div className={clsx(cssSignin.signin_google)}>
                <h1>LOGIN</h1>
            </div>

            <div className={clsx(cssSignin.signin_google)}>
                <form  className={clsx(cssSignin.signin_form)}>
                    <p>
                        <input id="acc" type="text"
                            placeholder='UserName'
                        />
                    </p>
                    <p>
                        <input id="pass" type="password"
                            placeholder='Password'
                        />
                    </p>
                    <label className={clsx(cssSignin.signin_textValue)} htmlFor="remember">Nhớ mật khẩu</label>
                    <input id='remember' type='checkbox' />
                    <p>
                        <button type='submit'>Đăng nhập</button>
                    </p>
                </form>
                <img src={logo} alt="No_Image"></img>
            </div>
            <div className={clsx(cssSignin.signin_google)}>
                <Link to='/forgotPass' className={clsx(cssSignin.textValue)}>Quên mật khẩu? </Link>
                <Link style={{ color: 'red' }} to='/signup'>Đăng ký</Link>
            </div>
        </div>
        </div>
    )
}

export default Signin