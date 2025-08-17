import axios from 'axios'

const getCountries = (name) => {
  const request = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
  return request.then(response => response.data)
}

export default {
  getCountries
}