import React from "react"
import clsx from "clsx"
import meo from '../../images/te.jpg';


function ProductsCart() {
    let a = [1, 2, 3, 4, 5];

   return a.map(() => {
        return (
            <tr>
                <td>
                    <img src={meo} alt="img" style={{ width: "50px" }}></img>
                </td>
                <td>
                    30.000
                </td>
                <td>
                    <button>Giam</button>
                    <input type="number" value={1}></input>
                    <button>Tang</button>
                </td>
                <td>100.000 VND</td>
            </tr>
        )
    })
}

export default ProductsCart