import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
  const CartCtx = useContext(CartContext)

  const totalAmount = `${CartCtx.totalAmount.toFixed(2)}`
  const hasItems = CartCtx.items.length > 0

  const removeHandler = (id) => {
    CartCtx.removeItem(id)
  }

  const addItemHandler = (item) => {
    CartCtx.addItem({...item, amount: 1})
  }

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
  )

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
