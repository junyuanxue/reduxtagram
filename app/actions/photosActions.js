export function fetchPhotos () {
  return {
    type: 'FETCH_PHOTOS'
  }
}

function handlePhotoFetchSuccess (photos) {
  return {
    type: 'PHOTOS_FETCH_SUCCEEDED',
    photos
  }
}

function handlePhotoFetchFailure (message) {
  return {
    type: 'PHOTOS_FETCH_FAILED',
    message
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
