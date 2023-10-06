import React from "react"
import clsx from "clsx"

import Footer from "../../Include/footer";

import meo from '../../images/te.jpg';
import success from '../../images/success.png';

import UserCss from "../../css/user/User.module.css"


function User() {
    return (
        <div>
        <div className={clsx(UserCss.user)}>
            <div className={UserCss.user_img}>
                <div className={clsx(UserCss.infoName)}>
                    <img src={meo} alt="img" style={{ width: "70px" }}></img>
                    <div className={clsx(UserCss.infoName_div1)}>
                        <h3>Do van quyet</h3>
                         <img src={success} alt="img"></img></div>
                </div>
                <div className={clsx(UserCss.User_contact)}>
                    <div className={clsx(UserCss.user_img_info)}>
                        <span>Email:</span>
                        <p>quyetdvph28978@fpt.edu.vn</p>
                    </div>
                    <br></br>
                    <div className={clsx(UserCss.user_img_info)}>
                        <span>Số điện thoại:</span>
                        <p>0367782202</p>
                    </div>
                    <br></br>
                    <div className={clsx(UserCss.user_img_info)}>
                        <span>Trạng thái:</span>
                        <p>Ative</p>
                    </div>
                </div>
            </div>

            <div className={clsx(UserCss.infoDetail)}>
                <div className={clsx(UserCss.headerInfor)}>
                    <p>Thông tin cá nhân</p>
                </div>

                <div className={clsx(UserCss.infoDetail_user)}>
                    <p className={clsx(UserCss.pInfor)}>Thông tin cá nhân</p>
                    <div className={clsx(UserCss.infoDetail_divInfo)}>
                        <p>Họ và tên: </p>
                        <input className={clsx(UserCss.infoDetail_info)} placeholder="Đỗ Văn Quyết" disabled></input>
                    </div>
                    <div className={clsx(UserCss.infoDetail_divInfo)}>
                        <p>Giới tính: </p>
                        <input className={clsx(UserCss.infoDetail_info)} placeholder="Nam" disabled></input>
                    </div>
                    <div className={clsx(UserCss.infoDetail_divInfo)}>
                        <p>Ngày sinh: </p>
                        <input className={clsx(UserCss.infoDetail_info)} placeholder="07/02/2002" disabled></input>
                    </div>
                    <div className={clsx(UserCss.infoDetail_divInfo)}>
                        <p>Địa chỉ: </p>
                        <input className={clsx(UserCss.infoDetail_info)} placeholder="Hà nội" disabled></input>
                    </div>
                    <p className={clsx(UserCss.pInfor)}>Thông tin liên hệ</p>
                    <div className={clsx(UserCss.infoDetail_divInfo)}>
                        <p >Số điện thoại: </p>
                        <input className={clsx(UserCss.infoDetail_info)} placeholder="0367782202" disabled></input>
                    </div>

                    <div className={clsx(UserCss.infoDetail_divInfo)}>
                        <p >Email: </p>
                        <input className={clsx(UserCss.infoDetail_info)} placeholder="quyetdvph28978@fpt.edu.vn" disabled></input>
                    </div>
                </div>
            </div>
        </div>
         <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default User