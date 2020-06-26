import React, { useState } from 'react';

import { Card, Button, Main } from './template';

const DB = require('./db.json');

const About = () => {

  const [db, setdb] = useState(DB);
  const [active, setActive] = useState(0);

  const handleActiveUp = () => (active !== DB.length - 1) ? (setActive( currentActive => currentActive + 1)) : (null);

  const handleActiveDown = () => (active !== 0) ? (setActive(currentActive => currentActive - 1)) : (null);

  return (
    <div>
    <div>
      <Main />
    </div>
    
    <div>
    	<Card id = { db.length } text = { db[active].text } source = { db[active].source } imgSrc={ db[active].img } />
      <Button onClick = {handleActiveDown} text="Back" />
      <Button onClick = {handleActiveUp} text="Next" />
    </div>
    </div>
  )
}

export default About
