import clsx from "clsx"
import narvar from "../../css/include/mobileNarvar.module.css"
import down from "../../images/down.png"

function Navbar() {
    return (
        <div>
            <nav className={clsx(narvar.narbarMobile)}>
                <menu><a href="#" >Trang chủ</a></menu>
                <menu><a href="#">Cửa hàng</a></menu>

                <menu><a>Tài khoản</a>
                    <label htmlFor="mobiAcc"><img src={down}></img></label>
                </menu>
                <input style={{ display: "none" }} type="checkbox" id="mobiAcc" className={clsx(narvar.checkMobile_acc)}></input>

                <div className={clsx(narvar.accMobile)}>
                    <nav className={clsx(narvar.accMobile_nav)}>
                        <menu>Tài khoản của tôi</menu>
                        <menu>Đăng xuất</menu>
                    </nav>
                </div>
                <menu><a href="#">Liên hệ</a></menu>
                <menu><a href="#">About me</a></menu>

            </nav>

        </div>
    )
}

export default Navbar