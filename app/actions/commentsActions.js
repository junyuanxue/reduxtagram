export function fetchComments (postId) {
  return {
    type: 'FETCH_COMMENTS',
    postId
  }
}

export function addComment (author, comment) {
  return {
    type: 'ADD_COMMENT',
    author,
    comment
  }
}

export function removeComment (index) {
  return {
    type: 'REMOVE_COMMENT',
    index
  }
}
