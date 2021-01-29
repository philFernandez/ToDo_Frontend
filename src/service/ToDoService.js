import axios from "axios";

const API_END_POINT = "http://localhost:8080/api";

class ToDoService {
  getTodos() {
    return axios.get(API_END_POINT + "/todos");
  }

  postTodo(newTodo) {
    return axios.post(API_END_POINT + "/todo", newTodo);
  }
}

export default new ToDoService();
