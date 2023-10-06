import React, { useContext } from 'react'
import clsx from "clsx"
import { Link } from 'react-router-dom'

import contentCss from "../../css/include/content.module.css"

import Products from '../home/products.js';
import ProductDetail from '../productDetail/productDetail';


import context from '../../context/context';

function Content({ value }) {
    
    const [open, setOpen] = useContext(context)[1]()
    // console.log(a[1]);
    return (
        <div className={clsx(contentCss.content)}>
            <div className={clsx(contentCss.content_header)}>
                <div className={clsx(contentCss.banner_1)}>
                    <Link to={"/Products"} className={clsx(contentCss.bt_1)}>Shop now</Link>
                </div>
                <div className={clsx(contentCss.banner_2)}><p>
                </p>
                    <Link to={"/Products"} href='#' className={clsx(contentCss.bt_2)}>Shop now</Link>
                </div>
            </div>

            <div className={clsx(contentCss.content_value)}>
                <h1 style={{ color: "red", marginLeft: "30px" }}>Tổng quan sản phẩm</h1>
                <div className={clsx(contentCss.Products)}>
                    <Products test ={[open, setOpen]}/>
                </div>
            </div>

            <div className={clsx(contentCss.buyProductFake, {
                [contentCss.buyProduct]: open.check
            })}>
                <ProductDetail test ={[open, setOpen]} value = {value}/>
            </div>
        </div>
    )
}

export default Content