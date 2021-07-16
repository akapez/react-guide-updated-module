import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false)
  const CartCtx = useContext(CartContext)

  const { items } = CartCtx

  const numberOfCartItems = items.reduce((cartNumber, item) => {
    return cartNumber + item.amount
  }, 0)

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnHighlight(true)

    const timer = setTimeout(() => {
      setBtnHighlight(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
