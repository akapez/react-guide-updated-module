import React, {useState} from 'react'
import ExpenseItems from './ExpenseItems'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import './Expenses.css'




const Expenses = () => {

  const [filteredYear, setFilteredYear] = useState('2021')

    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', 
          title: 'New TV', 
          amount: 799.49, 
          date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];

      const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
      }

      return(
        <div>        
        <Card className='expenses'>   
        <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>     
        {expenses.map((data, id) => 
          <ExpenseItems key={id} date={data.date} title={data.title}  amount={data.amount} />
        )}        
        </Card>  
        </div>   
      )

}

export default Expenses;