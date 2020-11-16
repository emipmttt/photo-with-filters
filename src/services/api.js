import axios from "axios"

export default axios.create({
  baseURL: 'https://photo-filter-backend.herokuapp.com/',
})
