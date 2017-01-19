import React, { PropTypes } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class SinglePhoto extends React.Component {
  componentWillMount () {
    const postId = this.props.params.postId
    this.props.fetchComments(postId)
  }

  render () {
    const postId = this.props.params.postId
    const posts = this.props.posts

    const index = posts.findIndex((post) => post.id === postId)
    const post = posts[index]

    return (
      <div className='single-photo'>
        <Photo
          index={index}
          post={post}
          {...this.props} />
        <Comments
          postComments={this.props.comments || []}
          postId={postId}
          {...this.props} />
      </div>
    )
  }
}

SinglePhoto.propTypes = {
  params: PropTypes.object.isRequired,
  posts: PropTypes.array,
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array
}

export default SinglePhoto
