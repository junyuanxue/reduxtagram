import $ from 'jquery'

const token = '249716683.1677ed0.5dd09759c52040c4850bc41d84295983'
const endpoint = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`

const api = {
  fetchPhotos: () => {
    return $.ajax({
      type: 'GET',
      url: endpoint,
      dataType: 'jsonp'
    }).then(response => response.data)
  }
}

export default api
