function comments (state = [], action) {
  switch (action.type) {
    case 'COMMENTS_FETCH_SUCCEEDED':
      return action.comments
    case 'COMMENTS_FETCH_FAILED':
      console.log('Comments fetch failed :(')
      break
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index), // from the start to the one we want to delete
        ...state.slice(action.index + 1) // after the deleted one, to the end
      ]
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          from: {
            username: action.author
          },
          text: action.comment
        }
      ]
    default:
      return state
  }
}

export default comments

// Reducer composition: we only want a **slice** of the state to manage.
// So rather than changing the entire comments state, we only want to change the state of comments that belong to one post.
