import React from 'react';
import { connect } from 'react-redux';
import { removedItem } from '../Actions/actions.js';
import { browserHistory } from 'react-router';
import telephone from '../../assets/telephone.png';
import flag from '../../assets/flag.png';
import logo from '../../assets/logo.png';
import coins from '../../assets/coins.png';
import bin from '../../assets/bin.png';

class Checkout extends React.Component {
  render() {
    console.log('Checkout Props ', this.props);
    return (
      <div className='checkout'>
        <header />
        <img src={telephone} className='telephone' />
        <p className='header-text tel-no'>1337 1337 1337</p>
        <img src={flag} className='flag' />
        <p className='header-text slogan'>Try another Castle</p>
        <img src={logo} className='logo' />
        <div className='checkout-container'>
          <button onClick={() => browserHistory.push('/')}>Go Back</button>
          <div className='checkout-items'>{this.renderList()}</div>
          <div className='checkout-totals'>
            <p>
              <span>Total</span> {this.props.cartTotal} Gil
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderList() {
    return this.props.items.map((item) => {
      return (
        <div className='checkout-item' key={item.id}>
          <div
            className='checkout-item_image'
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className='checkout-item_name'>{item.Name}</div>
          <img className='checkout-item_coins' src={coins} />
          <p className='checkout-item_price'>{item.Price} Gil</p>
          <img
            className='checkout-item_bin'
            onClick={() => this.props.removedItem(item)}
            src={bin}
          />
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.selectedItems,
    cartTotal: parseInt(
      state.selectedItems.reduce((acc, item) => acc + item.Price, 0)
    ),
  };
};
export default connect(mapStateToProps, { removedItem })(Checkout);
