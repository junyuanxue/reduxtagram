import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'
import user from './user'

const rootReducer = combineReducers({
  posts,
  comments,
  user,
  routing: routerReducer
})

export default rootReducer
