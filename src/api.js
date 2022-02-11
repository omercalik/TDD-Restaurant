import axios from "axios"
const client = axios.create({
  baseURL:
    "https://outside-in-dev-api.herokuapp.com/ADqVA78UeOZOYq2t1TQKyeBHHCQE4JR0",
})

const api = {
  loadRestaurants() {
    return client.get("/restaurants").then((response) => response.data)
  },
}

export default api
