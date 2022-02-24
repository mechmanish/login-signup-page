import React from "react";
import "./listOfUsers.css";

const UserDetail = ({user}) =>{

    const userData = `id: ${user._id}, username: ${user.username}, password: ${user.password}, role: ${user.role}, _v: ${user._v}`;

    return(
        <div className="userList">
            <li key={user._id}>{userData}</li>
            <li>{<br />}</li>
            {/* {console.log(user)} */}
        </div>
    );
}

export default UserDetail;