// The reducer does the editing of state.
// Every time an action is dispatched, every reducer is going to run,
// hence the switch statement

function posts (state = [], action) {
  switch (action.type) {
    case 'PHOTOS_FETCH_SUCCEEDED':
      return action.photos
    case 'PHOTOS_FETCH_FAILED':
      console.log('Photo fetch failed :(')
      break
    case 'INCREMENT_LIKES':
      const i = action.index
      return [                                    // return updated state
        ...state.slice(0, i),                     // before the one we're updating
        {...state[i], likes: state[i].likes + 1}, // the post we're updating
        ...state.slice(i + 1)                     // after the one we're updating
      ]
    default:
      return state
  }
}

export default posts

// * NOTES *
// A reducer takes in 2 things:
// 1. the action (info what happened)
// 2. copy of current state
// pass in action, store --> reducer checking --> return updated store

// In redux, we use functional programming:
// we do not mutate our state, we use pure functions.
// we do not mutate something that's outside a function.
// --- Inpure function: ---
// function addLikes (picture) {
//   picture.likes ++
//   return picture
// }
// --- Pure function: ---
// we take a copy of the state, modify it, and return the new state:
// function addLikes (picture) {
//   var pic = Object.assign({}, picture)
//   pic.likes ++
//   return pic
// }
// So everytime we pass in the same object, it will return the same value. It's a predicatable and pure function that is not mutating any external state.
