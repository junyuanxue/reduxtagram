import React from 'react'
import { render } from 'react-dom'
import router from './config/router'
import css from './styles/style.styl'

render(
  router,
  document.getElementById('root')
)
