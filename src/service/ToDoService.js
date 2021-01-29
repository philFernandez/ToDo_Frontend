import axios from "axios";

const GET_ALL_URL = "http://localhost:8080/api/todos";
const POST_NEW_URL = "http://localhost:8080/api/todo";

class ToDoService {
  getTodos() {
    return axios.get(GET_ALL_URL);
  }

  postTodo(newTodo) {
    return axios.post(POST_NEW_URL, newTodo);
  }
}

export default new ToDoService();
