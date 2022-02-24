import React, { useEffect } from "react";

import { getListOfUsers } from "../../redux/listOfUsersRegistred/lisOfUsersRegistred.action";
import { useDispatch, useSelector } from 'react-redux';

// import listOfUsersReducer from "../../redux/listOfUsersRegistred/lisOfUsersRegistred.reducer";

import UserDetail from "./userDetail";



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
        <div>
            <h1>List of Users</h1>
            <ul>
                {listAllUsers ? (listAllUsers.map((user)=> <UserDetail key={user._id} user={user}/>)) : ("Welcome to the list of Users")}
            </ul>
        </div>
    );
}

export default ListOfUsers;