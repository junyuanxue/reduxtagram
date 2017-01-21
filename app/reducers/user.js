function user (state = {}, action) {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return user
    case 'USER_FETCH_FAILED':
      console.log('User fetch failed :(')
      break
    default:
      return state
  }
}

export default user
