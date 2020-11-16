import axios from "axios"

export default axios.create({
  baseURL: 'https://photo-filter-backend.herokuapp.com/',
  // baseURL: 'http://localhost:3000',
})
