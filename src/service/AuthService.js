import axios from "axios";

const API_URL = "https://pure-dusk-97009.herokuapp.com/";

class AuthService {
    constructor() {
        this.loggedIn = false;
    }

    async login(username, password) {
        const response = await axios.post(API_URL + "authenticate", {
            username,
            password,
        });
        if (response.data.token) {
            this.loggedIn = true;
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return axios.post(API_URL + "register", {
            username,
            password,
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

export default new AuthService();
