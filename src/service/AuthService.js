import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  async login(username, password) {
    const response = await axios
          .post(API_URL + "authenticate", {
              username,
              password,
          });
      if (response.data.token) {
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
}

export default new AuthService();
