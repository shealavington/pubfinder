import axios from "axios"

// TODO: Will need to make this more dynamic to accept a URL via environemnt.
export default axios.create({
  baseURL: 'http://localhost:3001',
})
