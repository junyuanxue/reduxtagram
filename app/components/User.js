import React, { PropTypes } from 'react'

class User extends React.Component {
  componentWillMount () {
    this.props.fetchUser()
  }

  render () {
    const user = this.props.user
    return (
      <div className='user'>
        <img src={user.profile_picture} alt={user.username} />
        <div>
          <h3>{user.username}</h3>
          <ul>
            <li>{user.counts.media} posts</li>
            <li>{user.counts.followed_by} followers</li>
            <li>{user.counts.follows} following</li>
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
