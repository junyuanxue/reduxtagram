import React from 'react'
import { render } from 'react-dom'
import routes from './config/routes'
import css from './styles/style.styl'

render(
  routes,
  document.getElementById('root')
)
