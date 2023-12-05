import { Link } from 'react-router-dom'
import logo from '../images/googleImage.png'
import clsx from "clsx"
import cssSignin from "../css/signin.module.css";

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

import LoginAPI from '../APi/login/login';
import swal from 'sweetalert';

function Signin() {
    const { register,handleSubmit, formState:{ errors }  } = useForm({
        // mode:"onChange",
        criteriaMode:"all"
    });

    useEffect(() => {
        const requestParma = new URLSearchParams(window.location.search);
        let param = requestParma.get("error")
        if(param) {
            swal({
                title:"Thông báo",
                text: "Tài khoản hoặc mật khẩu không chính xác",
                timer: 5000,
                closeOnClickOutside:true,
                icon:"warning"
            })
        }
    },[]);

    const ons= (data) => {
       LoginAPI(data);
    }

    return (
        <div className={clsx(cssSignin.bgSignin)}>
        <div className={clsx(cssSignin.signin)}>

            <div className={clsx(cssSignin.signin_google)}>
                <h1>LOGIN</h1>
            </div>

            <div className={clsx(cssSignin.signin_google)}>
                <form className={clsx(cssSignin.signin_form)} onSubmit={handleSubmit(ons)}>
                    <p>
                        <input {...register("acc", { required:true })} placeholder='Username' id='acc'/>
                    </p>
                    <span className={clsx(cssSignin.erros)}>
                        {errors.acc && <p>Username không được để trống</p>}
                    </span>
                    <p>
                        <input id="pass" type="password"
                            placeholder='Password' {...register("pass", {required:true})}/>
                    </p>
                    <span className={clsx(cssSignin.erros)}>
                        {errors.pass && <p>Password không được để trống</p>}
                    </span>
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