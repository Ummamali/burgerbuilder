import React from 'react';



// Components
import Header from './Header/Header';
import Burger from './Burger/Burger';
import Terminal from './Terminal/Terminal';
import Menu from './Menu/Menu';
import Bill from './Bill/Bill';



export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuToggled: false,
      billToggled: false,
      burgerIng: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat:0
      }
    };
    this.ingNames = Object.keys(this.state.burgerIng);
  }

  render(){
    return (
      <div className='min-h-screen flex flex-col'>
        <Bill toggled={this.state.billToggled} items={this.state.burgerIng} toggleBill={this.toggleBill}/>
        <Menu toggled={this.state.menuToggled} toggleMenu={this.toggleMenu}/>
        <Header toggleMenu={this.toggleMenu}/>
        <div className='main'>
          <Burger ingredients={this.state.burgerIng}/>
          <Terminal total={20} ingNames={this.ingNames} changeAmount={this.changeAmount} toggleBill={this.toggleBill}/>
        </div>
      </div>
    );
  }

  toggleMenu = () => {
    this.setState(old => {
      return { menuToggled: !old.menuToggled };
    });
  }

   toggleBill = () => {
    this.setState(old => {
      return { billToggled: !old.billToggled };
    });
  }

  changeAmount = (e) => {
    const ingredientName = e.target.dataset.ingname;
    const amount = parseInt(e.target.dataset.amount);
    console.log(ingredientName, amount);
    this.setState(prev => {
      const burgerIng = {...prev.burgerIng};
      if(amount === -1 && burgerIng[ingredientName] <= 0){
        console.log('cancelling');
        return { burgerIng };
      }
      burgerIng[ingredientName] += amount;
      return { burgerIng };
    });
  }
}