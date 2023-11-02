import { useNavigate } from "react-router-dom";
import { AppState } from "../../Context/AppProvider";
import { API } from "../../API/api.js";

export default function LeadCard({ lead }) {
  const { leadData, setLeadData } = AppState();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("data"));
  const userRole = userData.data.role;
  const removelead = async (id) => {
    let res = window.confirm("Are your sure?");
    if (res) {
      //api delete operations
      const response = await fetch(`${API}leads/delete/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      // console.log(data);
      const newleadData = leadData.filter((lead) => lead._id !== id);
      setLeadData(newleadData);
    }
  };
  return (
    <div className="card w-96 bg-gray-800 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title ">{lead.clientname}</h2>
        <p>Client Contact: {lead.clientcontact}</p>
        <p>Enquiry : {lead.enquiry}</p>
        <p>Handleby: {lead.handleby}</p>
        <p>Status: {lead.status}</p>

        <div className="card-actions justify-end">
          {(userRole === "Admin" || userRole === "Manager") && (
            <>
              <button
                className="btn btn-neutral"
                onClick={() => removelead(lead._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-warning"
                onClick={() => navigate(`/leads/edit/${lead._id}`)}
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
