import clsx from "clsx"

import quan_tri from "../Component_admin/css/quantri.module.css"

import HeaderQuanTri from "./header/header"
import NavQuanTri from "./nav/nav"

function Quantri({ quyet }) {
    return (
        <div>
            <div className={clsx(quan_tri.header)}>
                <HeaderQuanTri />
            </div>
            <div className={quan_tri.body}>
            <div className={clsx(quan_tri.nav)}><NavQuanTri /> </div>

            <div className={clsx(quan_tri.content)}>{quyet}</div>
            </div>
        </div>
    )
}

export default Quantri