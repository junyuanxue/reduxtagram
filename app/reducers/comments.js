function postComments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT': // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT': // return the new state without the deleted comment
      return [
        ...state.slice(0, action.index), // from the start to the one we want to delete
        ...state.slice(action.index + 1) // after the deleted one, to the end
      ]
    default:
      return state
  }
}

// Reducer composition: we only want a **slice** of the state to manage.
// So rather than changing the entire comments state, we only want to change the state of comments that belong to one post.

function comments (state = [], action) {
  if (action.postId) {
    return {
      ...state,                                                   // take current state
      [action.postId]: postComments(state[action.postId], action) // overwrite this post with a new one
    }
  }
  return state
}

export default comments
