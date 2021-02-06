import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/api/";

class ToDoService {
  getTodos() {
    return axios.get(API_URL + "todos", { headers: authHeader() });
  }

  postTodo(newTodo) {
    return axios.post(API_URL + "todo", newTodo, { headers : authHeader() });
  }

}

export default new ToDoService();
