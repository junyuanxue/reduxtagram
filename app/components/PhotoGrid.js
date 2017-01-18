import React, { PropTypes } from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {
  componentWillMount () {
    console.log('component will mount')
    this.props.fetchPhotos()
  }

  render () {
    const photoList = this.props.posts.map((post, i) => {
      return <Photo
        {...this.props} // ES6 spread, passing down all the props to Photo component
        post={post}
        index={i}
        key={i} />
    })

    return (
      <div className='photo-grid'>
        {photoList}
      </div>
    )
  }
}

PhotoGrid.propTypes = {
  posts: PropTypes.array,
  fetchPhotos: PropTypes.func.isRequired
}

export default PhotoGrid
