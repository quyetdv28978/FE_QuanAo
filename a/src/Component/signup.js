import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import signupCss from '../css/signup.module.css'
import { useForm } from 'react-hook-form'
import { fail, success } from '../APi/const/swal'
import apiSignup from '../APi/login/signup'

function Signup() {
    const { register, watch, handleSubmit, setError, reset, formState: { errors } } = useForm()

    const pass = watch("pass");
    const passAgain = watch("passAgain")

    const submit = async (data) => {
        if (pass !== passAgain) {
            setError("passAgain", {
                message: "Mật khẩu không trùng khớp"
            })
        }
      else {
        const a = await apiSignup(data);
        if(a.status === 200) {
         success()
        data.acc = "";
        data.pass = "";
        data.email = "";
        data.passAgain = ""
        reset(data);
        } else {
         fail()
     }
      }
    }

    return (
        <div className={clsx(signupCss.signupCss)}>
            <div className={clsx(signupCss.signup)}>
                <div className={clsx(signupCss.title)}>
                    <h1>Đăng Ký</h1>
                </div>
                <form className={clsx(signupCss.singup_Form)} onSubmit={handleSubmit(submit)}>
                    <input {...register("acc", { required: true })} placeholder='Tên tài khoản' />
                    <span>
                        {errors.acc && <p>Username không được để trống</p>}
                    </span>
                    <input {...register("email", { required: true, pattern:{
                        value:/^[a-zA-Z0-9._%+-]+@gmail.com$/,
                        message:"Gmail không đúng định dạng"
                    }})} placeholder='Email' type='email' />
                    <span>
                    {errors.email && <p>{errors.email.message}</p>}
                    </span>
                    <input type='password' {...register("pass", { required: true })} placeholder='Mật khẩu'></input>
                    <span>
                        {errors.pass && <p>Mật khẩu không được để trống</p>}
                    </span>
                    <input type='password' {...register("passAgain", { required: true })} placeholder='Nhập lại mật khẩu'></input>
                    <span>
                        {errors.passAgain && <p style={{ lineHeight: "10px", font: "10px" }}>{errors.passAgain.message}</p>}
                    </span>
                    <button type='submit'>Đăng ký</button>
                </form>
                <span>Bạn đã có tài khoản <Link to='/signin' style={{ color: "green" }}>Đăng nhập</Link></span>
            </div>
        </div>
    )
}

export default Signup