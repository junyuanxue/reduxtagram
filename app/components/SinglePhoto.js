import React, { PropTypes } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class SinglePhoto extends React.Component {
  render () {
    const { postId } = this.props.params
    const posts = this.props.posts

    const index = posts.findIndex((post) => post.code === postId)
    const post = posts[index]
    const postComments = this.props.comments[postId] || []

    return (
      <div className='single-photo'>
        <Photo
          index={index}
          post={post}
          {...this.props} />
        <Comments
          postId={postId}
          postComments={postComments} />
      </div>
    )
  }
}

SinglePhoto.propTypes = {
  params: PropTypes.object.isRequired,
  posts: PropTypes.array,
  comments: PropTypes.object
}

export default SinglePhoto
