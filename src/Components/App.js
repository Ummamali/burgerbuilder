import React from 'react';



// Components
import Header from './Header/Header';
import Burger from './Burger/Burger';
import Terminal from './Terminal/Terminal';



export default class App extends React.Component{
  render(){
    return (
      <>
        <Header />
        <Burger ingredients={{ salad: 5, bacon: 3, cheese: 2, meat:3}}/>
        <Terminal />
      </>
    );
  }
}