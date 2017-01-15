import React, { PropTypes } from 'react'

class Comments extends React.Component {
  renderComment (comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  render () {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment)}
      </div>
    )
  }
}

Comments.propTypes = {
  postComments: PropTypes.array.isRequired
}

export default Comments
