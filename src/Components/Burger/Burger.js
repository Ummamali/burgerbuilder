import React from 'react';

import top from '../../assets/imgs/top.jpg';
import btm from '../../assets/imgs/btm.jpg';

const Burger = (props) => {
  let ingredients = [];
  for (const cls in props.ingredients){
    for (let i = 0; i < props.ingredients[cls]; i++){
      ingredients.push(<div className={cls} key={cls + i}></div>);
    }
  }
  return (
    <div className='burger p-4'>
      <img src={top} alt="burger top" className='block mx-auto'/>
      { ingredients.length > 0 ? ingredients : <h2>Please start adding ingredients</h2> }
      <img src={btm} alt="burger bottom" className='block mx-auto mv-right'/>
    </div>
  );
};


export default Burger;