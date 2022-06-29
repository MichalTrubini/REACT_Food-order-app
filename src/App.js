import React from 'react';
import Header from './Layout/Header';
import Main from './Layout/Main';
import CartProvider from './Store/CartProvider';

function App() {
  return (
    <CartProvider>
      <div className='page'>
        <Header />
        <Main />
      </div>
    </CartProvider>
  );
}

export default App;
