import React from "react"
import clsx from "clsx"

import FilterCss from "../../css/shops/filter.module.css"

import LocBySp from "./locBySP"

import filter from "../../images/shops/filter.png"
import search from "../../images/shops/search.png"

// Handle filter
function checkBox(inputCheck) {
    let check = inputCheck.target.checked;
    let lableLoc = document.getElementsByClassName("lableLoc").item(0);
    let labelSearch = document.getElementsByClassName("lableSearch").item(0);

    inputCheck.target.id.includes("filterLoc") === true ? lableLoc = lableLoc : lableLoc = labelSearch;

    if (lableLoc.className.includes("lableLoc")) {  
        document.getElementById("filter_check").style.paddingBottom = "0px";
        document.getElementById("filterTimkiem").checked = false;
    }
    else if (lableLoc.className.includes("lableSearch")) {
        document.getElementById("filterLoc").checked = false;

    }

    if (check) {
        lableLoc.style.color = "#e6e6e6"
    }
    else {
        lableLoc.style.color = "#888"
    }
}

function Filter() {
    return (
        <div className={clsx(FilterCss.filter)}>
            <div className={clsx(FilterCss.filter_basic)}>
                <div className={clsx(FilterCss.filter_norm)}>
                   <LocBySp/>
                </div>

                <div className={clsx(FilterCss.filter_hard)}>
                    <label htmlFor="filterLoc" className="lableLoc">
                        <img src={filter} alt="img"></img>
                        <a>Lọc</a>
                    </label>
                    <label htmlFor="filterTimkiem" className="lableSearch">
                        <img src={search} alt="img"></img>
                        <a>Tìm kiếm</a>
                    </label>
                </div> </div>
            <input type="checkbox" id="filterLoc" className={clsx(FilterCss.filterLoc)}
                onChange={(e) => checkBox(e)}
            ></input>
            <input type="checkbox" id="filterTimkiem" className={clsx(FilterCss.filterTimkiem)}
                onChange={(e) => checkBox(e)}
            ></input>

            {/* Show filter nâng cao */}

            <div className={clsx(FilterCss.filter_tryHard)}>
                <div className={clsx(FilterCss.hidde)}>

                    <div>
                        <ul>
                            <ol className={clsx(FilterCss.firtText)}>Sắp xếp theo</ol>
                            <ol>Bán chạy nhất</ol>
                            <ol>Hàng mới</ol>
                            <ol>Giá: thấp đến cao</ol>
                            <ol>Giá: cáo đến thấp</ol>
                        </ul>
                    </div>

                    {/* Theo giá */}
                    <div>
                        <ul>
                            <ol className={clsx(FilterCss.firtText)}>Giá</ol>
                            <ol>All</ol>
                            <ol>Hàng mới</ol>
                            <ol>Giá: thấp đến cao</ol>
                            <ol>Giá: cáo đến thấp</ol>
                        </ul>
                    </div>

                    {/* màu */}

                    <div>
                        <ul>
                            <ol className={clsx(FilterCss.firtText)}>Màu</ol>
                            <ol>Bán chạy nhất</ol>
                            <ol>Hàng mới</ol>
                            <ol>Giá: thấp đến cao</ol>
                            <ol>Giá: cáo đến thấp</ol>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tim kiem */}
            <div id="filter_check" className={FilterCss.search}>
                <div id="filter_checkHidden" className={clsx(FilterCss.items)}>
                    <img src={search} alt="search"></img>
                    <input type="text" placeholder="Nhập tên sản phẩm" />
                </div>
            </div>
        </div>
    )
}

export default Filter