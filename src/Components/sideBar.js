import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("data"));
  // console.log("User Data:", userData);

  const userRole = userData.data.role;
  // console.log("User Role:", userRole);

  // Ensure that userRole is defined
  useEffect(() => {
    if (!userRole) {
      // Redirect to the login page if the user data is not available
      navigate("/login");
    }
  }, [navigate, userRole]);

  return (
    <div className="dashboard">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        ></label> */}
        </div>
        <ul className="menu p-4 h-full text-yellow-500 font-semibold ">
          {userRole === "Admin" && (
            <>
              <li className="py-5 text-xl w-64 gap-y-10">
                <button onClick={() => navigate("/request/all")}>
                  Service Request
                </button>
              </li>
              <li className="py-5 text-xl w-64 gap-y-10">
                <button onClick={() => navigate("/leads/all")}>Leads</button>
              </li>
              <li className="py-5 text-xl w-64 gap-y-10">
                <button onClick={() => navigate("/users/all")}>Users</button>
              </li>
            </>
          )}
          {userRole === "Manager" && (
            <>
              <li className="py-5 text-xl w-64 gap-y-10">
                <button onClick={() => navigate("/request/all")}>
                  Service Request
                </button>
              </li>
              <li className="py-5 text-xl w-64 gap-y-10">
                <button onClick={() => navigate("/leads/all")}>Leads</button>
              </li>
            </>
          )}
          {userRole === "Employee" && (
            <>
              <li className="py-5 text-xl w-64 gap-y-10">
                <button onClick={() => navigate("/request/all")}>
                  Service Request
                </button>
              </li>
              <li className="py-5 text-xl w-64 gap-y-10">
                <button onClick={() => navigate("/leads/all")}>Leads</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
