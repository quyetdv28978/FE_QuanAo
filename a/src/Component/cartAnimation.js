import React from "react"

import CartAnimationCss from "../css/cartAnimation.css"

import close from "../images/close.png"
import meo from "../images/te.jpg"


function CartAnimation() {
    let a = [1, 2, 3];
    return (
        <div className="cartAnimation">
            <div className="cartAnimation__title">
                <h2>Giỏ hàng của bạn</h2>
                <label htmlFor="inputClose_CartAnimation" onClick={()=>{
                    document.getElementById("input_CartAnimation").checked = false
                }}>
                    <img src={close} alt="img" style={{ width: "16px", height: "16px" }}></img>
                </label>


            </div>

            <div className="cartProduts">
                {a.map((value, index) => {
                    return (
                        <div className="cartProducts_item" key={index}>
                            <img src={meo} alt="img" style={{ width: "60px" }}></img>
                            <div>
                                <p>Ten san pham</p>
                                <p>10000000</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="checkout">
                <div><h3>Tổng tiền: money</h3></div>
                <div>
                    <button>Xem giỏ hàng</button>
                    <button>Thanh toán</button>
                </div>
            </div>

        </div>
    )
}

export default CartAnimation