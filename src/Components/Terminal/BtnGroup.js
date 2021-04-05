import React from 'react';



const BtnGroup = (props) => {
  return (
    <div className='flex'>
      <h2 className='font-bold'>{props.name}</h2>
      <button onClick={props.addAmount} data-amount={-1} className='btn'>Less</button>
      <button onClick={props.addAmount} data-amount={1} className='btn'>More</button>
    </div>
  );
}

export default BtnGroup;