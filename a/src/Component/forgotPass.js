import { Link } from 'react-router-dom'
import clsx from "clsx"
import forgotCss from "../css/forgotPass.module.css"
function ForgetPass(){
return (
<div className={clsx(forgotCss.forgot)}>
   <div> <h1>Quên mật khẩu</h1></div>
    <form  className={clsx(forgotCss.forgot_form)}>
       <p><input placeholder='Email'/></p> 
        <button className={clsx(forgotCss.btn)}>Gửi</button>
    </form>
    <Link to="/signin">Đăng nhập</Link>
</div>
)
}

export default ForgetPass