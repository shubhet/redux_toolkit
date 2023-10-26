import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  // console.log(data)

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className=" btn-delete" onClick={() => deleteUser(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
export default DisplayUsers;
