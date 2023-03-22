import React, { useState } from 'react';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandlerParent = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    }); //set state based on the previous user list
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandlerParent} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
