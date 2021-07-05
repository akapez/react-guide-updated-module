import React, {useRef, useImperativeHandle} from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef()

    const active = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            focus: active
        }
        
    })

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        className={props.className}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
})

export default Input
