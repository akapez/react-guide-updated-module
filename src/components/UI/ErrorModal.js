import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModel.module.css'

const Backdrop = (props) => {
  return (<div className={classes.backdrop} onClick={props.onClose} />)
}

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(   //portals
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal( //portal
        <Overlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  )
}

export default ErrorModal
