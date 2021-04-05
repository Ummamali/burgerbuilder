import React from 'react';

import BtnGroup from './BtnGroup';

const Terminal = (props) => {
  return (
    <div className='terminal flex flex-col items-center py-4'>
        <h2 className='text-xl mb-6'>Current Price: {props.total}</h2>
        <div className='space-y-2'>
          {props.ingNames.map((name, idx) => {
            return <BtnGroup name={name[0].toUpperCase() + name.slice(1)} ingName={name} key={name+idx} changeAmount={props.changeAmount}/>
          })}
        </div>
        <button className='bg-secondary py-2 px-8 rounded text-green-50 mt-6'>Checkout</button>
    </div>
  );
}


export default Terminal;