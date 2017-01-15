import React, { PropTypes } from 'react'

class Comments extends React.Component {
  renderComment (comment, i) {
    console.log(comment)
  }

  render () {
    return (
      <div className='comment'>
        {this.props.postComments.map(this.renderComment)}
      </div>
    )
  }
}

Comments.propTypes = {
  postComments: PropTypes.array.isRequired
}

export default Comments
