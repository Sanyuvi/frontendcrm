import { useNavigate } from "react-router-dom";
import { AppState } from "../../Context/AppProvider";
import { API } from "../../API/api.js";

export default function ServiceRequestCard({ request }) {
  const { requestData, setRequestData } = AppState();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("data"));
  const userRole = userData.data.role;
  const removerequest = async (id) => {
    let res = window.confirm("Are your sure?");
    if (res) {
      //api delete operations
      const response = await fetch(`${API}request/delete/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      const newrequestData = requestData.filter(
        (request) => request._id !== id
      );
      console.log(requestData);
      console.log(newrequestData);

      setRequestData(newrequestData);
    }
  };
  return (
    <div className="card w-96 bg-gray-800 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{request.clientname}</h2>
        <p>Service: {request.service}</p>
        <p>Priority : {request.priority}</p>
        <p>Status: {request.status}</p>
        <p>Expected Closing: {request.expectedclosing}</p>

        <div className="card-actions justify-end">
          {(userRole === "Admin" || userRole === "Manager") && (
            <>
              <button
                className="btn btn-neutral"
                onClick={() => removerequest(request._id)}
              >
                Delete
              </button>

              <button
                className="btn btn-warning"
                onClick={() => navigate(`/request/edit/${request._id}`)}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
