import { logoutUser } from "../Reducers/loginReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("data"));
  const userName = userData.data.name;

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="navbar bg-gray-900  text-neutral-content rounded-lg p-2 md:p-4 lg:p-4 toolbar">
      <div className="flex-1">
        <a className="text-yellow-500 ml-4 font-bold uppercase text-md md:text-xl lg:text-xl">
          {userName}
        </a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-warning p-2 md:p-4 lg:p-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default TopBar;
