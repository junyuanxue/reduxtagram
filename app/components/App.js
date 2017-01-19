import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/actionCreators'
// import * as actionCreators from '../actions/photosActions'
import Main from './Main'

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
console.log(actions)
// console.log(actionCreators)

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

// pass state to Main and make actions available to Main
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
