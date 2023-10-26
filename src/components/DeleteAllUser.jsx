import styled from "styled-components";
import {useDispatch} from "react-redux"
import { clearAllUser } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    console.log("hi")
    dispatch(clearAllUser())
  }

  return  <div>
  <button className="btn clear-btn" onClick={deleteUsers}>clear users</button>
  </div>
}


export default DeleteAllUser;