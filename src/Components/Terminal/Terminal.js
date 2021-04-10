import React from 'react';

import BtnGroup from './BtnGroup';

class Terminal extends React.PureComponent{
  render(){
    const btnGroups = [];
    let idx = 0;
    let itemsCount = 0;
    for (const name in this.props.ings){
      btnGroups.push((
        <BtnGroup 
          name={name[0].toUpperCase() + name.slice(1)}
          ingName={name} key={name+idx} 
          changeAmount={this.props.changeAmount} 
          amount={this.props.ings[name]}
        />
      ));
      idx++;
      itemsCount += this.props.ings[name];
    }
    return (<div className='terminal flex flex-col items-center py-4'>
        <h2 className='text-xl mb-6'>Current Price: {this.props.total}</h2>
        <div className='space-y-2'>
          { btnGroups }
        </div>
        <button className='bg-secondary py-2 px-8 rounded text-green-50 mt-6' onClick={this.props.toggleBill} disabled={itemsCount<=0}>Checkout</button>
    </div>);
  }
}


export default Terminal;