import React, { PropTypes } from 'react'
import { Router, Route } from 'feeble/router'
import App from '../containers/App'

export default function routes({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  )
}

routes.propTypes = {
  history: PropTypes.object.isRequired,
}
