import React from "react";
import { useDispatch } from "react-redux";
import  { fakeUserData }from "../api/index"
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
import DeleteAllUser from "./DeleteAllUser";

const UserDetails=()=>{

    const dispatch = useDispatch();

    const addNewUser=(name)=>{
        dispatch(addUser(name));
    }

    return(
        <div className="content">
            <h3>Redux-ToolKit</h3>
            <div>
            <button className="btn add-btn" onClick={()=>addNewUser(fakeUserData())}>Add New User</button>
        </div>
        <ul>
            <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
        </div>
    )
}

export default UserDetails;