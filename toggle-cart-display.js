import {cart, cartOpenBtn, cartCloseBtn } from './elements';

function toggleCartDisplay() {
  cartOpenBtn.addEventListener('click', () => {
    cart.classList.add('cart--show');
  });

  cartCloseBtn.addEventListener('click', () => {
    cart.classList.remove('cart--show');
  });

}

export default toggleCartDisplay;