import axios from 'axios'

function foursquareApi(API_KEY: string) {
  return axios.create({
    baseURL: 'https://api.foursquare.com/v3/',
    headers: {
      Accept: 'application/json',
      Authorization: API_KEY,
    },
  })
}

export default foursquareApi