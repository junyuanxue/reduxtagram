import React, { PropTypes } from 'react'

class User extends React.Component {
  componentWillMount () {
    this.props.fetchUser()
  }

  render () {
    const user = this.props.user
    return (
      <div className='user'>
        <div className='user-image'>
          <img src={user.profile_picture} alt={user.username} />
        </div>
        <div className='user-details'>
          <h3>{user.username}</h3>
          <ul>
            <li>{user.counts.media} <span>posts</span></li>
            <li>{user.counts.followed_by} <span>followers</span></li>
            <li>{user.counts.follows} <span>following</span></li>
          </ul>
          <h4>{user.full_name}</h4>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  fetchUser: PropTypes.func,
  user: PropTypes.object
}

export default User
