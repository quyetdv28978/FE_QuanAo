import React, { useEffect, useLayoutEffect, useState } from "react"
import clsx from "clsx"
import swal from "sweetalert"

import productDetailCss from "../../css/productsDetail/productsDetail.module.css"

import meo from "../../images/te.jpg"
import close from "../../images/close.png"
import { domain } from "../../APi/const/API"

// Product: 
// Sản phẩm mua
// qulityPR: 
// Số lượng sản phẩm cần mua
// ItemCart:
// set lại số lượng sản phẩm trong giỏ hàng hiện trên icon cart
function clickMuaNgay(product, qualityPR, itemCart) {
    for (let index = 0; index < sessionStorage.length; index++) {
        if (sessionStorage.key(index).includes(product)) {
            let key = sessionStorage.key(index);
            let value = sessionStorage.getItem(key);
            value = Number(Number(qualityPR) + Number(value));
            sessionStorage.setItem(product, value);
            itemCart(sessionStorage.length)
        }
        else {
            sessionStorage.setItem(product, qualityPR);
            itemCart(sessionStorage.length)
        }
    }
    if (sessionStorage.length === 0) {
        sessionStorage.setItem(product, qualityPR);
        itemCart(sessionStorage.length)
    }
    swal("Thông báo", "Thêm vào giỏ hàng thành công", "success");
}

// test: 
// [open, setOpen] useState chứa value để ẩn hiện màn mua sản phẩm
// Value: 
// Số lượng sản phẩm trong giỏ hàng sẽ hiện trên đầ icon
function ProductDetail({ test, value }) {
    const [open, setOpen] = test
    const [quality, setQuality] = useState(1);

    useEffect(() => {
      console.log(open);
    })

    useLayoutEffect(() => {
        if (quality < 1) {
            setQuality(1);
        }
    }, [quality])

    return (
        <div>
            <div className={clsx(productDetailCss.productDetail)}>
                <div className={clsx(productDetailCss.closeDetail)}>
                    <label ><img src={close} alt="" onClick={() => {
                        setOpen({ check: false, product: "" })
                        setQuality(1)
                    }}></img>
                    </label>
                </div>
                <div className={clsx(productDetailCss.imgDetail)}>
                    {/* <div className={clsx(productDetailCss.imgDetail_title)}>
                        <img src={meo} alt="img" className={clsx(productDetailCss.imgTitle)}></img>
                        <img src={meo} alt="img" className={clsx(productDetailCss.imgTitle)}></img>
                        <img src={meo} alt="img" className={clsx(productDetailCss.imgTitle)}></img>
                    </div> */}
                    <img src={domain + 'images/' +open.product.image} alt="img" className={clsx(productDetailCss.imgMain)}></img>
                </div>

                <div className={clsx(productDetailCss.productContent)}>
                    <h2>{open.product.tenSP}</h2>
                    <h2>{open.product.giaBan}</h2>
                    <h5>Chết thật tốn thời gian quá, dài quá đê ngủ ngủ ngủ ngủ ngủ ngủ ngủ ngủ ngủ....................................................
                        ...................................................................
                    </h5>

                    <div>
                        <div className={clsx(productDetailCss.detailSize)}>
                            <div className={clsx(productDetailCss.detaisize_select)}>
                                <span><b>Size</b></span>
                                <select className={clsx(productDetailCss.detaisize_selectSize)}>
                                    <option>Chọn một phần tử</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                            <br />
                            <div className={clsx(productDetailCss.detaisize_select)}>
                                <span><b>Color</b></span>
                                <select>
                                    <option>Chọn một phần tử</option>
                                    <option>Vàng</option>
                                    <option>Đỏ</option>
                                    <option>Xanh</option>
                                    <option>Tím</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={clsx(productDetailCss.detailInput)}>
                        <button className={clsx(productDetailCss.btIncre)} onClick={() => setQuality(quality + 1)}>Tang</button>
                        <input type="number" readOnly value={quality} />
                        <button className={clsx(productDetailCss.btIncre)} onClick={() => setQuality(quality - 1)}>Giam</button>
                        <p><button className={clsx(productDetailCss.btBuy)} onClick={() => clickMuaNgay(open.product.tenSP, quality, value)}>Mua ngay</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail