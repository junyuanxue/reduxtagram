import React, { PropTypes } from 'react'
import Photo from './Photo'
// import Comments

class SinglePhoto extends React.Component {
  render () {
    const code = this.props.params.postId
    const posts = this.props.posts
    const index = posts.findIndex((post) => post.code === code)
    const post = posts[index]

    return (
      <div className='single-photo'>
        <Photo
          index={index}
          post={post}
          {...this.props} />
      </div>
    )
  }
}

SinglePhoto.propTypes = {
  params: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
}

export default SinglePhoto
