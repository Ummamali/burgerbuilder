import React from 'react';



const BtnGroup = (props) => {
  return (
    <div className='btn-group flex items-center'>
      <h2 className='font-medium'>{props.name}</h2>
      <button onClick={props.changeAmount} data-amount={-1} data-ingname={props.ingName} className='btn'>Less</button>
      <button onClick={props.changeAmount} data-amount={1} className='btn' data-ingname={props.ingName}>More</button>
    </div>
  );
}

export default React.memo(BtnGroup);