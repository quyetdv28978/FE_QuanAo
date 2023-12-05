import { signupAPI } from "../const/API";

function apiSignup(data) {
    let result = fetch(signupAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(respon => respon.json())
        .then(dt => {
            return dt
        });
        return result
    }

export default apiSignup; 