import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import signupCss from '../css/signup.module.css'
function Signup() {
    return (
        <div className={clsx(signupCss.signup)}>
            <div className={clsx(signupCss.title)}>
                <h1>Đăng Ký</h1>
            </div>
            <form className={clsx(signupCss.singup_Form)}>
                <input type='text' placeholder='Tên tài khoản' />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Mật khẩu'></input>
                <input type='password' placeholder='Nhập lại mật khẩu'></input>
                <button type='submit'>Đăng ký</button>
            </form>
            <span>Bạn đã có tài khoản <Link to='/signin' style={{color:"green"}}>Đăng nhập</Link></span>
        </div>
    )
}

export default Signup