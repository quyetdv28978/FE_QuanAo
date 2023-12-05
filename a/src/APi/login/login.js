import { loginAPI } from "../const/API"

function LoginAPI(user) {
    fetch(loginAPI, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(user)
    })
        .then(respon => { return respon.json() })
        .then(data => {
            console.log(data);
            let { status } = data;
            if (status === 800) {
                window.location.href = "/signin?error=1"
            }
            else window.location.href = "/home"
        })
        .catch((err) => {
            console.log(err);
        })
}


export default LoginAPI