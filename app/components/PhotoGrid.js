import React, { PropTypes } from 'react'
import Photo from './Photo'
import User from './User'

class PhotoGrid extends React.Component {
  render () {
    const photoList = this.props.posts.map((post, i) => {
      return <Photo
        {...this.props} // ES6 spread, passing down all the props to Photo component
        post={post}
        index={i}
        key={i} />
    })

    return (
      <div className='photo-grid-wrapper'>
        <User fetchUser={this.props.fetchUser} />
        <div className='photo-grid'>
          {photoList}
        </div>
      </div>
    )
  }
}

PhotoGrid.propTypes = {
  posts: PropTypes.array,
  fetchUser: PropTypes.func
}

export default PhotoGrid
