import React from 'react';
import { connect } from 'react-redux';
import { removedItem } from '../Actions/actions.js';
import { browserHistory } from 'react-router';
import coins from '../../assets/coins.png';
import bin from '../../assets/bin.png';

class ShoppingCart extends React.Component {
  renderList() {
    return this.props.items.map((item) => {
      return (
        <div className='cart-item' key={item.id}>
          <div
            className='cart-item_image'
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className='cart-item_name'>{item.Name}</div>
          <img className='cart-item_coins' src={coins} />
          <p className='cart-item_price'>{item.Price} Gil</p>
          <img
            className='bin'
            onClick={() => this.props.removedItem(item)}
            src={bin}
          />
        </div>
      );
    });
  }

  renderCartMessage(props) {
    if (props.items.length < 1) {
      return <p className='cart-pane-message'>No items</p>;
    }
  }

  renderCartTotal(props) {
    if (props.total > 0) {
      return (
        <div className='total'>
          <div className='total-title'>Total</div>
          <div className='total-price'>
            {this.props.total} <span>Gil</span>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1 className='title'>Basket</h1>
        <div>{this.renderList()}</div>
        <div>{this.renderCartMessage(this.props)}</div>
        <div>{this.renderCartTotal(this.props)}</div>
        <div
          onClick={() => {
            if (this.props.items.length > 0) browserHistory.push('/checkout');
          }}
          style={{ opacity: this.props.items.length < 1 ? '0.5' : '1' }}
          className='cart-button'
        >
          Continue
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    items: state.selectedItems,
    cartTotal: parseInt(
      state.selectedItems.reduce((acc, item) => acc + item.Price, 0)
    ),
  };
};

export default connect(mapStateToProps, { removedItem })(ShoppingCart);
