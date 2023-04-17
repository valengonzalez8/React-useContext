import React, { useState,  useContext } from "react";
import { CurrentUser } from "./context";


const Home = () => {


    const {setUserID} = useContext(CurrentUser);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleChange = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleClick = () => {
        setUserID(selectedUser)
    }

  
    return (
  
      <div className="home-container">
        <h1 className="title">WELCOME TO THE JSONPLACEHOLDER API</h1>
        <label>User number: </label>
        
        <input type="text" onChange={handleChange} />
        <br />
        <button type="submit" onClick={handleClick}>Submit</button>
      </div>
    
      
    );
  };
  
  export default Home;