import axios from "axios";
import environment from "../environment";

const api = axios.create({
  //baseURL: `http://${environment.api.baseUrl}:${environment.api.port}`,
  baseURL: `http://192.168.1.9:3333`,
});

export default api;
