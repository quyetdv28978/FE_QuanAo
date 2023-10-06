import { useState } from "react";

function ContextStateProduct () {
    const [product, setProduct] = useState("s");
    return [product, setProduct]; 
}

export default ContextStateProduct