import React, { useContext, useState } from "react"
import Header from "../../Include/header"
import Footer from "../../Include/footer"
import Filter from "./filter"
import ProductsC from "./products"

import ShopsCss from "../../css/shops/shops.module.css"

import clsx from "clsx"
import ProductDetail from "../productDetail/productDetail"
import context from "../../context/context"

function Products() {
    const [quality2, setQuality] = useState(0);
    const [open, setOpen] = useContext(context)[1]()


    return (
        <div>
            <Header value={quality2}></Header>
            <div className={clsx(ShopsCss.products)}>
                <div className={clsx(ShopsCss.products_filter)}>
                    <Filter></Filter>
                </div>
                <div className={clsx(ShopsCss.products_some)}>
                    <ProductsC test ={[open, setOpen]}></ProductsC>
                </div>
                <div className={clsx(ShopsCss.products_loadMore)}>LoadMore</div>
            </div>

            <div className={clsx(ShopsCss.buyProductFake, {
                [ShopsCss.buyProduct]: open.check
            })}>
                <ProductDetail test={[open, setOpen]} value={setQuality}/>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Products