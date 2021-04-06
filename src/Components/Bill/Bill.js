import React from 'react';




const Bill = (props) => {
  const itemsList = [];
  for (const item in props.items){
    itemsList.push(<li key={item}>{item[0].toUpperCase() + item.slice(1)}: {props.items[item]}</li>);
  }

  const addCls = props.toggled ? 'active' : '';

  return (
    <div className={'bill-contain fixed w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center ' + addCls}>
      <div className='bill bg-white py-12 px-10 rounded-sm'>
        <h2 className='text-2xl'>Your Order</h2>
        <p className='text-gray-500 text-sm'>The delicious burger ingredients are as follows: </p>
        <ul className='space-y-1 my-4'>
          { itemsList }
        </ul>
        <p className='text-sm text-gray-500'>Chcekout or cancel reservation</p>
        <div className='mt-4 space-x-8 text-lg'>
          <button className='text-red-500'>Checkout</button>
          <button className='text-green-600' onClick={props.toggleBill}>Cancel</button>
        </div>
      </div>
    </div>
  );
};


export default Bill;