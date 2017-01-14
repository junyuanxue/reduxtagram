// A reducer takes in 2 things:
// 1. the action (info what happened)
// 2. copy of current state
// action, store --> reducer checking --> return updated store

function posts (state = [], action) {
  console.log('posts')
  console.log('state: ', state)
  console.log(action)
  return state
}

export default posts
