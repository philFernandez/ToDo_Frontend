import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/api/";

class ToDoService {
  getTodos() {
    console.log('GET :>> ', {headers: authHeader()});
    return axios.get(API_URL + "todos", { headers: authHeader() });
  }

  postTodo(newTodo) {
    console.log('POST :>> ', {headers: authHeader()});
    return axios.post(API_URL + "todo", newTodo, { headers : authHeader() });
  }

}

export default new ToDoService();
