import axios from "axios";

const END_POINT_URL = "http://localhost:8080/api/todos";

class ToDoService {
  getTodos() {
    return axios.get(END_POINT_URL);
  }
}

export default new ToDoService();
