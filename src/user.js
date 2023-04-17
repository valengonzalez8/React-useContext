import React, { useState, createContext, useContext } from 'react';
import { CurrentUser } from './context';

const Notifications = createContext(null)

function User() {

  const [notif, setNotif] = useState(2);
  const {userData} = useContext(CurrentUser);
  console.log(userData);
  return (

      <Notifications.Provider value={notif}>
        {userData && 
        <>
          <DisplayUser/>
          <button onClick={() => {setNotif(0)}}>Delete all notifications</button>
          <br />
        </>
          
        }
      </Notifications.Provider>
  );
}

function DisplayUser() {
  const {userData} = useContext(CurrentUser);
  console.log(userData)
  const notifications = useContext(Notifications);
  return (
    <>
      <h1> Welcome back, {userData.name}! </h1>
      <p> You have {notifications} notifications. </p>
      <p>Email: {userData.email} </p>
    </>
  );
}




export default User;