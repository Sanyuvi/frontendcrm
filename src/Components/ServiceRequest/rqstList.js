import { AppState } from "../../Context/AppProvider";
import Base from "../../Pages/BasePage";
import { useNavigate } from "react-router-dom";
import ServiceRequestCard from "./rqstCard";
import { useState } from "react";
import { useEffect } from "react";

export default function RequestList() {
  const { requestData } = AppState();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("data"));
  const userRole = userData.data.role;

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Use slice to get the items for the current page
  const paginatedData = requestData.slice(startIndex, endIndex);
  useEffect(() => {
    // Check if the current page has no data after deletion and reset it
    if (paginatedData.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [paginatedData, currentPage]);

  return (
    <Base>
      <div className="navbar p-3 ">
        <div className="navbar-start">
          <a className="text-yellow-500 ml-2 font-semibold normal-case text-xl">
            Service Request
          </a>
        </div>
        <div className="navbar-end">
          {(userRole === "Admin" || userRole === "Manager") && (
            <>
              <button
                className=" btn btn-warning p-1 "
                onClick={() => navigate("/request/add")}
              >
                Add Request
              </button>
            </>
          )}
        </div>
      </div>
      {paginatedData.map((request, idx) => (
        <ServiceRequestCard request={request} key={request._id} />
      ))}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          // disabled={currentPage === 1}
          className="btn btn-neutral mr-2 "
        >
          Prev
        </button>
        <span className="text-gray-500 mt-2 text-lg">
          Page {currentPage} of {Math.ceil(requestData.length / itemsPerPage)}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          // disabled={endIndex >= requestData.length}
          className="btn btn-neutral ml-2 "
        >
          Next
        </button>
      </div>
    </Base>
  );
}
