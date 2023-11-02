import { useNavigate } from "react-router-dom";
import { AppState } from "../../Context/AppProvider";
import { API } from "../../API/api";

export default function UserCard({ user }) {
  const { userData, setData } = AppState();
  const navigate = useNavigate();
  const removeUser = async (id) => {
    let res = window.confirm("Are your sure?");
    if (res) {
      //api delete operations
      const response = await fetch(`${API}users/delete/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      // console.log(data);
      const newUserData = userData.filter((user) => user._id !== id);
      setData(newUserData);
    }
  };
  return (
    <div className="card w-96 bg-gray-800 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Role : {user.role}</p>
        <p>Contact: {user.contact}</p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-neutral"
            onClick={() => removeUser(user._id)}
          >
            Delete
          </button>

          <button
            className="btn btn-warning"
            onClick={() => navigate(`/users/edit/${user._id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
