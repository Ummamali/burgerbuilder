import React from 'react';



const Header = ({hamClicked, toggleMenu}) => {
  return (
    <header className='py-3 px-8 flex items-center justify-between'>
      <button onClick={toggleMenu}><i className="fas fa-bars"></i></button>
      <h4><i className="fas fa-hamburger"></i></h4>
    </header>
  );
};



export default Header;