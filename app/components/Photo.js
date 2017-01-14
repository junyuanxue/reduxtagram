import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component {
  render () {
    const { post, index, comments } = this.props // creates 3 vars post, index, comments from this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className='grid-photo' />
          </Link>
          <div>{post.caption}</div>
          <CSSTransitionGroup
            transitionName='Like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              <span key={post.likes} className='likes-heart'>
                {post.likes}
              </span>
          </CSSTransitionGroup>
        </div>
      </figure>
    )
  }
}

Photo.propTypes = {
  post: PropTypes.object
}

export default Photo
