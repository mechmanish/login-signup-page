import React, { useEffect } from "react";
import "./listOfUsers.css";

import { Link } from "react-router-dom";

import { getListOfUsers } from "../../redux/listOfUsersRegistred/lisOfUsersRegistred.action";
import { useDispatch, useSelector } from 'react-redux';

// import listOfUsersReducer from "../../redux/listOfUsersRegistred/lisOfUsersRegistred.reducer";

import UserDetail from "./userDetail.js";

import { Button } from "@mui/material";



// ES6 Modules or TypeScript
// import Swal from 'sweetalert2';

const ListOfUsers = () => {

    const listOfUsers = useSelector(state => state);
    console.log(listOfUsers, "listOfUsers from useSelector ki value in listOfUsers.js");


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListOfUsers());
        console.log("listOfUsers.js mae dispatch time");
    }, []);


    const listAllUsers = listOfUsers.listOfUsersReducerData?.info?.data
    console.log(listAllUsers, "==>>listAllUsers");


    return (
        <div className="listOfUsersBox">
            <div className="headerOfListOfUsers">
                <div>
                    <h1>List of Users</h1>
                </div>

                <div className="btnInLOU">
                    <Button variant="contained">
                        <Link to="/addNewPoll">Add New Poll</Link>
                    </Button>

                    <Button variant="contained">
                        <Link to="/listAllPolls">List All Polls</Link>
                    </Button>
                </div>
                
            </div>

            <ul>
                {listAllUsers ? (listAllUsers.map((user) => <UserDetail key={user._id} user={user} />)) : ("Welcome to the list of Users")}
            </ul>
        </div>
    );
}

export default ListOfUsers;