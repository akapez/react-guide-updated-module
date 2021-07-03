import React, {useState} from 'react'
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
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;