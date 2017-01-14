import React, { PropTypes } from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {
  render () {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, i) =>
          <Photo
            {...this.props} // ES6 spread, passing down all the props to Photo component
            post={post}
            index={i}
            key={i} />
        )}
      </div>
    )
  }
}

PhotoGrid.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PhotoGrid
