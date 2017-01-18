import axios from 'axios'

const token = '249716683.1677ed0.5dd09759c52040c4850bc41d84295983'
const endpoint = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`

const api = {
  fetchPhotos: function () {
    return axios.get(endpoint)
  }
}

export default api
