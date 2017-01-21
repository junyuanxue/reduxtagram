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
            <LikeButton
              incrementLikes={this.props.incrementLikes}
              index={index}
              post={post} />
            <CommentButton post={post} />
          </div>
        </figcaption>
      </figure>
    )
  }
}

function LikeButton (props) {
  return (
    <button
      onClick={props.incrementLikes.bind(null, props.index)}
      className='likes'>
      &hearts; {props.post.likes.count}
    </button>
  )
}

function CommentButton (props) {
  return (
    <Link className='button' to={`view/${props.post.id}`}>
      <span className='comment-count'>
        <span className='speech-bubble' />
        {props.post.comments.count}
      </span>
    </Link>
  )
}

Photo.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  incrementLikes: PropTypes.func.isRequired
}

LikeButton.propTypes = {
  incrementLikes: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired
}

CommentButton.propTypes = {
  post: PropTypes.object.isRequired
}

export default Photo
