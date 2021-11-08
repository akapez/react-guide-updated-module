import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { Fragment } from 'react';

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [finishedSubmitting, setFinishedSubmitting] = useState(false);

  const totalAmount = `${CartCtx.totalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;

  const removeHandler = (id) => {
    CartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      'https://react-http-4bde7-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderItems: CartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setFinishedSubmitting(true);
    CartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cardModal = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClick} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClick}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  const isSubmittingData = <p>Sending order data...</p>;
  const finishedSubmittingData = <p>Successfully send order..</p>

  return (
    <Modal onClick={props.onClick}>
      {!isSubmitting && !finishedSubmitting && cardModal} 
      {isSubmitting && isSubmittingData}
      {!isSubmitting && finishedSubmitting && finishedSubmittingData}
    </Modal>
  );
};

export default Cart;
