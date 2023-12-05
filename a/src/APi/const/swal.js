import swal from "sweetalert";

export const success = () => swal({
    title:"Thông báo",
    text: "Đăng ký thành công",
    timer: 5000,
    closeOnClickOutside:true,
    icon:"success"
})

export const fail = () => swal({
    title:"Thông báo",
    text: "Đăng ký thất bại",
    timer: 5000,
    closeOnClickOutside:true,
    icon:"warning"
})