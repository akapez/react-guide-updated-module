import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const App = () => { 

  const addExpenseItem = expense => {

    console.log('In App.js')
    console.log(expense)
  }

  return (
    <>
    <NewExpenses onAddExpense={addExpenseItem}/>
    <Expenses />
    </>
  )
}

export default App;