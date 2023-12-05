import React, { useEffect } from "react"
import cartAnimationCss from '../css/cartAnimation.module.css'

import close from "../images/close.png"
import meo from "../images/te.jpg"
import clsx from "clsx";

function CartAnimation() {
    let a = [1, 2, 3];
    return (
        <div className={clsx(cartAnimationCss.cartAnimation)}>
            <div className={clsx(cartAnimationCss.cartAnimation__title)}>
                <h2>Giỏ hàng của bạn</h2>
                <label htmlFor="inputClose_CartAnimation" onClick={() => {
                    document.getElementById("input_CartAnimation").checked = false}}>
                    <img src={close} alt="img" style={{ width: "16px", height: "16px" }}></img>
                </label>
            </div>

            <div className={clsx(cartAnimationCss.cartProduts)}>
                {a.map((a, index) => {
                    return (
                        <div className={clsx(cartAnimationCss.cartProducts_item)} key={index}>
                            <img src={meo} alt="img" style={{ width: "60px" }}></img>
                            <div>
                                <p>Ten san pham</p>
                                <p>10000000</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={clsx(cartAnimationCss.checkout)}>
                <div>
                    <h3>Tổng tiền: money</h3>
                </div>
                <div>
                    <button>Xem giỏ hàng</button>
                    <button>Thanh toán</button>
                </div>
            </div>

        </div>
    )
}

export default CartAnimation