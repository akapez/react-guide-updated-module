import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {

    const expenseChangeHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseItem={expenseChangeHandler}/>
        </div>
    )

}


export default NewExpenses;