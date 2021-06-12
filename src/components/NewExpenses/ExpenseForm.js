import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [initialValues, setInitialValues] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // })

  const titleChange = (event) => {
    setEnteredTitle(event.target.value)
    // setInitialValues({
    //     ...initialValues,
    //     enteredTitle: event.target.value
    // })
    // setInitialValues((prevState) => {
    //     return {...prevState , enteredTitle:event.target.value}
    // })
  }

  const amountChange = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChange = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseItem(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__control'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChange} value={enteredTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChange}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2021-06-07'
            max='2024-12-31'
            onChange={dateChange}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
