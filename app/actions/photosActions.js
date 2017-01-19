export function fetchPhotos () {
  return {
    type: 'FETCH_PHOTOS'
  }
}

export function addPhoto (author, photo) {
  return {
    type: 'ADD_PHOTO',
    author,
    photo
  }
}

export function incrementLikes (index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
