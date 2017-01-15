import React from 'react'
import Photo from './Photo'
// import Comments

class SinglePhoto extends React.Component {
  render () {
    const code = this.props.params.postId
    const index = this.props.posts.findIndex((post) => post.code === code)
    console.log(index)
    return (
      <div className='single-photo'>
        SINGLE PHOTO
      </div>
    )
  }
}

export default SinglePhoto
