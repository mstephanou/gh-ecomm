import React from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import telephone from '../../assets/telephone.png';
import flag from '../../assets/flag.png';
import logo from '../../assets/logo.png';
// import '../styles/main.css'

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <img src={telephone} className='telephone' />
        <p className='header-text tel-no'>1337 1337 1337</p>
        <img src={flag} className='flag' />
        <p className='header-text slogan'>Try another Castle</p>
        <img src={logo} className='logo' />
        <div className='product-pane'>
          <ProductList />
        </div>
        <div className='cart-pane'>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default App;
