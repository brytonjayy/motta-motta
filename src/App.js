import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import Faq from './Pages/FAQ';
import Booking from './Pages/Booking'

function App() {
  return (
    <main>
    <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About}/>
          <Route path="/FAQ" component={Faq}/>
          <Route path="/Pricing" component={Pricing}/>
          <Route path="/Booking" component={Booking}/>
    </Switch>
</main>
  );
}

export default App;
