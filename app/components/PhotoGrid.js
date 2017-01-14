import React, { PropTypes } from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {
  render () {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, i) => <Photo />)}
      </div>
    )
  }
}

PhotoGrid.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PhotoGrid
