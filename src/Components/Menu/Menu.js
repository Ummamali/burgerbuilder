import React from 'react';



const Menu = (props) => {
  const addCls = props.toggled ? 'toggled' : '';
  return (
    <div className={'menu ' + addCls}>
      <div className='relative w-full h-full p-6'>
        <button className='absolute top-4 right-4' onClick={props.toggleMenu}><i className="fas fa-times"></i></button>
        <h2 className='text-3xl mb-8'>Hamburger</h2>
        <ul className='space-y-2'>
          <li><a href="home">Home</a></li>
          <li><a href="products">Products</a></li>
          <li><a href="sign">Sign In</a></li>
        </ul>
      </div>
    </div>
  );
};



export default React.memo(Menu);