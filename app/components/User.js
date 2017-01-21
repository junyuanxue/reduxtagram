import React, { PropTypes } from 'react'

class User extends React.Component {
  componentWillMount () {
    this.props.fetchUser()
  }

  render () {
    return (
      <div className='user'>
        I am user
      </div>
    )
  }
}

export default User
