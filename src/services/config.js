import axios from 'axios'

const Api = axios.create({
  baseURL: `https://cors-everywhere.onrender.com/${process.env.API_URL}`,
  headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` }
})

export default Api
