// A reducer takes in 2 things:
// 1. the action (info what happened)
// 2. copy of current state
// pass in action, store --> reducer checking --> return updated store

// The reducer does the editing of state.
// Every time an action is dispatched, every reducer is going to run,
// hence the switch statement

function posts (state = [], action) {
  console.log('posts action')
  console.log('posts state: ', state)
  console.log('posts action: ', action)
  return state
}

export default posts
