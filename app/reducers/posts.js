function posts (state = [], action) {
  console.log('posts action')
  console.log('posts state: ', state)
  console.log('posts action: ', action)
  return state
}

export default posts

// * NOTES *
// A reducer takes in 2 things:
// 1. the action (info what happened)
// 2. copy of current state
// pass in action, store --> reducer checking --> return updated store

// The reducer does the editing of state.
// Every time an action is dispatched, every reducer is going to run,
// hence the switch statement

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
