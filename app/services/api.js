import $ from 'jquery'

const token = '249716683.1677ed0.5dd09759c52040c4850bc41d84295983'
const base = 'https://api.instagram.com/v1'
const endpoint = `${base}/users/self/media/recent/?access_token=${token}`

const api = {
  fetchPhotos: () => {
    return $.ajax({
      type: 'GET',
      url: endpoint,
      dataType: 'jsonp'
    }).then(response => response.data)
  },

  fetchComments: (postId) => {
    const url = `${base}/media/${postId}/comments?access_token=${token}`
    return $.ajax({
      type: 'GET',
      url: url,
      dataType: 'jsonp'
    }).then(response => response.data)
  }
}

export default api
