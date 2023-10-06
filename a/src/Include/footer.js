import React from "react"
import clsx from "clsx"
import footerCss from "../css/include/footer.module.css"


function Footer () {
return (
    <div className={clsx(footerCss.footer)}>
        <div className={clsx(footerCss.footer_item, footerCss.footer_item__text)}>
        <p>Danh mục</p>
        <p>Women</p>
        <p>Men</p>
        <p>Shoes</p>
        <p>Watches</p>
        </div>

        <div className={clsx(footerCss.footer_item, footerCss.footer_item__text)}>
        <p>Trợ giúp</p>
        <p>Giỏ hàng</p>
        <p>Về đầu</p>
        <p>Liên hệ</p>
        </div>

        <div className={clsx(footerCss.footer_item)}>
        <p>Địa chỉ</p>
        <p>Đơn nguyên 3 - KTX Mỹ Đình, Hàm Nghi, Mỹ Đình 2, Nam Từ Liêm, HN Số điện thoại liên hệ: 0367782202 </p>
        
        </div>

        <div className={clsx(footerCss.footer_item)}>
        <p>Nhận thông tin mới</p>
        <p><input type="email" placeholder="email@gmail.com"></input></p>
        <p><button type="submit">Đăng ký</button></p>
        </div>
    </div>

    
)
}

export default Footer
