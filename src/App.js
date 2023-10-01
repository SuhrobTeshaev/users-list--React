import { AppContext } from './context';
import UsersList from './components/UsersList';
import { useState } from 'react';
import AddUser from './components/AddUser';
import './App.css';

const usersList = [
  {
    id:1,
    name:'John',
    age:24,
    bio:'I am programmer'
  }
]
function App() {
  const [users,setUsers]= useState(usersList);
  const dispatchUsersEvent = (actionType,payload)=>{
    switch(actionType){
      case  'ADD_USER':
        setUsers([...users,payload.newUser])
        return;
        case 'REMOVE_USER':
          setUsers(users.filter(user=>user.id!==payload.userId))
          return;
          default:
            return;
    }
  }
  return (
    <div className="App">
      <AppContext.Provider value={{users,dispatchUsersEvent}}>
        <AddUser />
       
        <UsersList/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
