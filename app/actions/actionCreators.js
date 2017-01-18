// an action: returns an object of what happened and
// what needs to be changed

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

export function addComment (postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function removeComment (postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
