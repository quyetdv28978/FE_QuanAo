import React from "react";
import clsx from "clsx";
import Header from "../../Include/header";
import Footer from "../../Include/footer";
import ProductsCart from "./productsCart";

import CartCss from "../../css/Cart/Cart.module.css"


function Cart() {
    return (
        <div>
            <div><Header></Header></div>
            <div className={clsx(CartCss.cart)}>
                <div className={clsx(CartCss.cart_table)}>
                    <table>
                        <thead>
                            <tr>
                            <th>
                                Sản phầm
                            </th>
                            <th>
                                Giá
                            </th>
                            <th>
                                Số lượng
                            </th>
                            <th>
                                Tổng tiền
                            </th>
                            </tr>
                        </thead>

                        <tbody>
                        <ProductsCart></ProductsCart>
                           
                        </tbody>
                    </table>

                </div>

                <div className={clsx(CartCss.bill)}>
                    <h2>Tổng tiền phải trả</h2>
                    <spna>Subtotal: 79.65</spna>

                    <div className={clsx(CartCss.bill_contents)}>
                        <div>Shippings:</div>
                        <div className={clsx(CartCss.bill_item)}>
                        <select>
                            <option>Hà nội</option>
                            <option>Hà nội</option>
                            <option>Hà nội</option>
                            <option>Hà nội</option>
                        </select>
                        <p><input placeholder="Quận"  >
                        </input></p>
                    </div>
                    </div>

                    <div>
                        <span>Tổng tiền</span>
                        <span>100.000</span>
                        <p>
                            <button className={clsx(CartCss.btThanhToan)}>Thanh toán</button>
                        </p>
                    </div>
                </div>
            </div>
            <div><Footer></Footer></div>
        </div>
    )
}

export default Cart