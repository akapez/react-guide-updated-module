import React,{useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css' 

const AddUsers = (props) => {

  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')
  const [alert, setAlert] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()

    if(userName.trim().length === 0 || age.trim().length ===0){
      setAlert({
        title: 'Invalid inputs',
        message: 'Please fill fields'

      })
      return
    }

    if(+age<1){  //check its number format
      setAlert({
        title: 'Invalid Age',
        message: 'Please enter age above 0'
      })
      return
    }

    props.onAddUser(userName, age)
    setUserName('')
    setAge('')
   
  }

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }

  const errorHandler = () => {
    setAlert(null)
  }

  return (
    <div>
    {alert && <ErrorModal title={alert.title} message={alert.message} onClose={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>User Name</label>
      <input id='username' type='text' value={userName} onChange={userNameChangeHandler}/>
      <label htmlFor='age'>User Age</label>
      <input id='age' type='number' value={age} onChange={ageChangeHandler}/>
      <Button type='submit'>Submit</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUsers
