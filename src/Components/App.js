import React from 'react';


// configurations
import { paths } from './Config';
// images
import loader_gif from '../assets/imgs/loaders/begin_loader.gif';

// Components
import Header from './Header/Header';
import Burger from './Burger/Burger';
import Terminal from './Terminal/Terminal';
import Menu from './Menu/Menu';
import Bill from './Bill/Bill';
import Loader from './Utils/loader';



export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuToggled: false,
      billToggled: false,
      hasLoaded: false,
      loadFailed: false,
      price: 0,
      burgerIng: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat:0
      }
    };
    // this is the loader el
    this.loaderEl = (
      <div className='text-center mt-20'>
        <Loader width="70px" classes='block mx-auto' source={loader_gif}/>
        <p className='text-gray-500 text-sm'>Loading necessary data. Please Wait...</p>
      </div>
    );
  }


  getErrEl = () => {
    return (
      <div className='bg-red-500 py-8 text-center bg-opacity-60 text-red-700 mt-12'>
        <p className='text-xl'>There is an error while loading this page</p>
        <p className='text-sm'>Please reload the page and try again</p>
      </div>
    );
  }

  render(){
    let mainBlock = this.loaderEl;
    if (this.state.hasLoaded){
      mainBlock = (
        <div className='main'>
          <Burger ingredients={this.state.burgerIng}/>
          <Terminal total={this.state.price} ings={this.state.burgerIng} changeAmount={this.changeAmount} toggleBill={this.toggleBill}/>
        </div>
      );
    }else if (this.state.loadFailed){
      mainBlock = this.getErrEl(this.errName);
    }
    return (
      <div className='min-h-screen flex flex-col bg-white'>
        <Bill toggled={this.state.billToggled} items={this.state.burgerIng} toggleBill={this.toggleBill} price={this.state.price}/>
        <Menu toggled={this.state.menuToggled} toggleMenu={this.toggleMenu}/>
        <Header toggleMenu={this.toggleMenu}/>
        { mainBlock }
      </div>
    );
  }


  componentDidMount(){
    fetch(paths.prices)
      .then(res => res.json())
      .then(resObj => {
        if (resObj.status === 200){
          this.prices = resObj.data;
          this.setState({ hasLoaded: true });
        }
      })
      .catch(err => {
        this.setState({loadFailed: true});
      });
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
    this.setState(prev => {
      const burgerIng = {...prev.burgerIng};
      if(amount === -1 && burgerIng[ingredientName] <= 0){
        console.log('cancelling');
        return { burgerIng };
      }
      burgerIng[ingredientName] += amount;
      const price = prev.price + (amount * this.prices[ingredientName]);
      return { burgerIng, price };
    });
  }

  
}