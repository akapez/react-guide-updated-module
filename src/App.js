import React, {useState, Fragment} from 'react'
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([])


  const addUserHandler = (uName, uAge) => {

    setUsersList((prvUserList) => {
      return [...prvUserList, {name: uName, age:uAge}]
    })
  }

  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;