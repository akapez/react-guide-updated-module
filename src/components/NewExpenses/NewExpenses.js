import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {

    const [open, setOpen] = useState(false)

    const expenseChangeHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setOpen(false)
    }

    const openHandler = () => {
        setOpen(true)
    }

    const cancelHandler = () => {
        setOpen(false)
    }

    return(
        <div className='new-expense'>
           {!open && <button onClick={openHandler}>Add New Expense</button>}
            {open && <ExpenseForm onSaveExpenseItem={expenseChangeHandler} onCancel={cancelHandler}/>}
        </div>
    )

}


export default NewExpenses;