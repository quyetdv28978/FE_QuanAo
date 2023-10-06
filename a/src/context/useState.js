import { useState } from "react";

function ContextState () {
    const [open, setOpen] = useState({check:false, product:{}});
    return [open, setOpen]; 
}

export default ContextState