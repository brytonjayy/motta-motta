import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import About from './Components/About'
import Booking from './Components/Booking'
import FAQs from './Components/FAQs'
import Pricing from './Components/Pricing'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Booking" component={Booking} />
      <Route path="/About" component={About} />
      <Route path="/FAQs" component={FAQs} />
      <Route path="/Pricing" component={Pricing} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister()
