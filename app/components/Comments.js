import React, { PropTypes } from 'react'

class Comments extends React.Component {
  handleSubmit (e) {
    e.preventDefault() // preventing the form from refreshing
    const { postId } = this.props
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
    this.refs.author.focus()
  }

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
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

Comments.propTypes = {
  postComments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired
}

export default Comments
