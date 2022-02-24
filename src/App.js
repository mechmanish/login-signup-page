import React from 'react';
// import {Switch} from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// import Navbar from './component/navbar/navbar';

import AddUser from './component/addUser/addUser';
import Login from './component/login/login';
import ListOfUsers from './component/listOfUsers/listOfUsers';

import AddNewPoll from "./component/workOnPoll/addNewPoll/addNewPoll.js"
import ListAllPolls from './component/workOnPoll/listAllPolls/listAllPolls.js';

// import { getLoginInfoRequest } from "./redux/loginValidation/loginValidation.action";
// import { useDispatch, useSelector } from 'react-redux';


function App() {

  console.log("app.js start running");

  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" render={()=> <AddUser />} exact />
        <Route path="/login" render={()=> <Login />} />
        <Route path="/listOfUsers" render={()=> <ListOfUsers />} /> 
        <Route path="/addNewPoll" render={()=> <AddNewPoll />} />
        <Route path="/listAllPolls" render={()=> <ListAllPolls />} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
