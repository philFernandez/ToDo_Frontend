export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('user.token :>> ', user.data.token);

    if (user && user.data.token) {
        return { Authorization: "Bearer " + user.data.token };
    } else {
        return {};
    }
}
