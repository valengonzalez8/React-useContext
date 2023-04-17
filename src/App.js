import React, { useState, useEffect } from 'react';
import './App.css'
import axios from "axios";
import './company'
import { CurrentUser } from './context';
import User from './user'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Routes } from 'react-router-dom/dist';
import Company from './company';
import Layout from './layout';
import Home from './home'; 
import { useQuery } from 'react-query';

function App() {

  const [userID, setUserID] = useState(null);
  const [userData, setUserData] = useState(null);

  const fetchData = async () =>{
    if(userID){
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
    return res.data;}
  }
  
  const { data, refetch, status } = useQuery("data", fetchData);

  useEffect(() => {
    refetch()
  },[userID, refetch])

  useEffect(() => {
    if(status === "success"){
      setUserData(data);
    }
  },[data, status])


  return (
    <CurrentUser.Provider value={{userID, userData, setUserID}}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="user" element={<User />}/>
            <Route path="company" element={<Company />} />
          </Route>
        </Routes>
      </Router>
    </CurrentUser.Provider>

      
  );
}

export default App;
