import React, { useEffect, useState } from "react"

import clsx from "clsx";
import contentCss from "../../css/include/content.module.css"

import ProductAPI from "../../APi/product/product";
import { domain } from "../../APi/const/API";

function Products({ test }) {
    const [product, setProduct] = useState([]);
    const [open, setOpen] = test

    useEffect(() => {
        ProductAPI(4, 0, setProduct);
    }, [])

    return (
        product.map((value, index) => {
            if (index < 4) {
                return (
                    <div className={clsx(contentCss.item)} key={index}>
                        <img src={domain + "images/" + value.image} alt='img'></img>
                        <div className={clsx(contentCss.itemDetail)}>
                            <p>{value.giaBan}</p>
                            <p >{value.tenSP}</p>
                        </div>
                        <div className={clsx(contentCss.quickView)}>
                            <button className={clsx(contentCss.btQV)} onClick={e => setOpen({check:true, product:value})}>Mua ngay</button>
                        </div>
                    </div>
                )
            }
        })

        // </div>

    )
}

export default Products