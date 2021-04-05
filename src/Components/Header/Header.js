import React from 'react';



const Header = ({hamClicked}) => {
  return (
    <header className='py-2 px-8 flex items-center justify-between'>
      <button><i className="fas fa-bars"></i></button>
      <h4><i className="fas fa-hamburger"></i></h4>
    </header>
  );
};



export default Header;