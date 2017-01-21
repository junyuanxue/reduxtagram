import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/actionCreators'
import Main from './Main'

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

// pass state to Main and make actions available to Main
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
