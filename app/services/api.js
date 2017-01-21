import $ from 'jquery'

const token = '249716683.1677ed0.5dd09759c52040c4850bc41d84295983'
const base = 'https://api.instagram.com/v1'

const api = {
  makeRequest: (url) => {
    return $.ajax({
      type: 'GET',
      url: url,
      dataType: 'jsonp'
    }).then(response => response.data)
  },

  fetchPhotos: () => {
    const url = `${base}/users/self/media/recent/?access_token=${token}`
    this.makeRequest(url)
  },

  fetchComments: (postId) => {
    const url = `${base}/media/${postId}/comments?access_token=${token}`
    this.makeRequest(url)
  },

  fetchUser: () => {
    const url = `${base}/users/self/?access_token=${token}`
    this.makeRequest(url)
  }
}

export default api
