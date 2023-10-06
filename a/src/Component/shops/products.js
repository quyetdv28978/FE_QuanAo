import React, { useState, useEffect } from "react"
import clsx from "clsx"
import contentCss from "../../css/shops/products.module.css"

import meo from '../../images/te.jpg';

function Products({ test }) {

    const [product, setProduct] = useState([]);
    const [open, setOpen] = test

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setProduct(value);
            })
    }, [])

    return product.map((value, index) => {
        return (
            <div className={clsx(contentCss.item)} key={index}>
                <img src={meo} alt="img"></img>
                <div className={clsx(contentCss.itemDetail)}>
                <p>{value.name}</p>
                <p>{value.username}</p>
                </div>

                <div className={clsx(contentCss.quickView)}>
                    <button className={clsx(contentCss.btQV)}  onClick={e => setOpen({check:true, product:value})}>Mua ngay</button>
                </div> </div>
        )
    })
}

export default Products