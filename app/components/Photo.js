import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

// TODO:
// break view down to smaller components

class Photo extends React.Component {
  render () {
    const { post, index } = this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`view/${post.id}`}>
            <img src={post.images.standard_resolution.url} alt={index} className='grid-photo' />
          </Link>

          <CSSTransitionGroup
            transitionName='Like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              <span key={post.likes.count} className='likes-heart'>
                {post.likes.count}
              </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption ? post.caption.text : ''}</p>

          <div className='control-buttons'>
            <button
              onClick={this.props.incrementLikes.bind(null, index)}
              className='likes'>
              &hearts; {post.likes.count}
            </button>

            <Link className='button' to={`view/${post.id}`}>
              <span className='comment-count'>
                <span className='speech-bubble' />
                {post.comments.count}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}

Photo.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  incrementLikes: PropTypes.func.isRequired
}

export default Photo
