import React from 'react';

import BtnGroup from './BtnGroup';

const Terminal = (props) => {
  return (
    <div className='terminal flex flex-col items-center'>
        <h2>Current Price {props.current}</h2>
        <div>
          <BtnGroup name='Salad'/>
          <BtnGroup name='Bacon'/>
          <BtnGroup name='Cheese'/>
          <BtnGroup name='Meat'/>
        </div>
    </div>
  );
}


export default Terminal;