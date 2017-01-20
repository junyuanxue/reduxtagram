import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Main extends React.Component {
  componentWillMount () {
    this.props.fetchPhotos()
  }

  render () {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxtagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

Main.propTypes = {
  fetchPhotos: PropTypes.func
}

export default Main
