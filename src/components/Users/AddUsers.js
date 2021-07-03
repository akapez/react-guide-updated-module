import React,{useState, useRef} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'
import classes from './AddUser.module.css' 

const AddUsers = (props) => {

  const userNameInput = useRef()  //userRef
  const userAgeInput = useRef() //userRef

  const [alert, setAlert] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()
    const nameInput = userNameInput.current.value
    const ageInput = userAgeInput.current.value
   
    if(nameInput.trim().length === 0 || ageInput.trim().length ===0){
      setAlert({
        title: 'Invalid inputs',
        message: 'Please fill fields'

      })
      return
    }

    if(+ageInput<1){  //check its number format
      setAlert({
        title: 'Invalid Age',
        message: 'Please enter age above 0'
      })
      return
    }

    props.onAddUser(nameInput, ageInput)
    userNameInput.current.value = ''
    userAgeInput.current.value = ''
   
  }

   const errorHandler = () => {
    setAlert(null)
  }

  return (

    //uncontrolled component
    <Wrapper>  
    {alert && <ErrorModal title={alert.title} message={alert.message} onClose={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>User Name</label>
      <input id='username' type='text' ref={userNameInput}/>
      <label htmlFor='age'>User Age</label>
      <input id='age' type='number' ref={userAgeInput}/>
      <Button type='submit'>Submit</Button>
    </form>
    </Card>
    </Wrapper>
  )
}

export default AddUsers
