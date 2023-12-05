import clsx from "clsx"
import css from "../css/header_quan_tri.module.css"

function header_quan_tri() {
    return (
        <div className={clsx(css.header_quan_tri)}>
            <div className={clsx(css.header_quan_tri_content)}>
                {/* logo web */}
                <img className={clsx(css.imgLogo)} alt="avt"></img>
                {/* ten user */}
                <span>Name user</span>
            </div>
        </div>
    )
}

export default header_quan_tri