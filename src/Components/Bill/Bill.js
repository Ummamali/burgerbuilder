import React from "react";


// configurations
import { paths, meta, createPostInit } from '../Config';

// Components
import Notification from './Notification';

class Bill extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      orderPlaced: false,
      errorRaised: false,
      loading: false
    };
    this.initialState = {...this.state};
  }
  render() {
    const itemsList = [];
    for (const item in this.props.items) {
      itemsList.push(
        <li key={item} className="text-gray-700">
          {item[0].toUpperCase() + item.slice(1)}: {this.props.items[item]}
        </li>
      );
    }

    const addCls = this.props.toggled ? "active" : "";

    return (
      <div
        className={
          "bill-contain fixed w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center " +
          addCls
        }
      >
        <div className="bill bg-white py-12 px-10 rounded-sm">
          <Notification orderPlaced={this.state.orderPlaced} errorraised={this.state.errorRaised} loading={this.state.loading}/>
          <h2 className="text-2xl">Your Order</h2>
          <p className="text-gray-500 text-sm">
            The delicious burger ingredients are as follows:{" "}
          </p>
          <ul className="space-y-1 my-4">{itemsList}</ul>
          <h3 className="text-lg text-gray-700">
            Total Price: <span className="font-medium">{this.props.price}</span>
          </h3>
          <p className="text-sm text-gray-500">
            Chcekout or cancel reservation
          </p>
          <div className="mt-4 space-x-8 text-lg">
            <button className="text-green-600" disabled={this.state.orderPlaced || this.state.loading} onClick={this.placeOrder}>Checkout</button>
            <button className="text-red-500" onClick={this.resetBill}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  resetBill = () => {
    if (!this.state.loading){
      this.setState(this.initialState);
    }
    this.props.toggleBill();
  }

  placeOrder = () => {
    this.setState({loading: true, errorRaised: false, orderPlaced: false});
    const dataObj = {
      token: 2019,
      data: {
        user: meta,
        order: this.props.items
      }
    };

    fetch(paths.order, createPostInit(dataObj))
      .then(res => res.json())
      .then(resObj => {
        if (resObj.status === 200){
          this.setState({orderPlaced: true, loading: false});
        }else{
          throw new Error(resObj.msg);
        }
      })
      .catch(err => {
        this.setState({ errorRaised: true, loading: false });
      });
  } 
}

export default Bill;
