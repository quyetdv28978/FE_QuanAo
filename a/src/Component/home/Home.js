import clsx from "clsx"
import headerCss from "../../css/include/header.module.css"

import Content from "../../Component/home/content.js"
import Footer from "../../Include/footer.js"
import Slide from "../../Component/home/slide.js"
import Header from '../../Include/header.js'

import up from "../../images/up.png"

import { useEffect, useState } from 'react'

function Home() {
    const [check, setCheck] = useState(false);
    const [quality2, setQuality] = useState(0);

    document.addEventListener("scroll", (e) => {
        if (document.documentElement.scrollTop >= 400) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    })

    useEffect(() => {
        setQuality(sessionStorage.length)
    }, [])

    return (
        <div className={clsx(headerCss.wrapperContens)}>
            <Header value={quality2}></Header>
            <div className={clsx(headerCss.slide)}>
                <Slide></Slide>
            </div>
            <div className={clsx(headerCss.contentC)}>
                <Content value={setQuality}></Content>
            </div>
            <div className={clsx(headerCss.footer)}>
                <Footer></Footer>
            </div>
            {check ? (<div className={clsx({
                [headerCss.up]: check
            })}><img src={up} alt="img" onClick={() => { window.scrollTo({ top: 0 }) }}></img></div>) : null}
        </div>
    )
}

export default Home