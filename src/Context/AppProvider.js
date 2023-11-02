import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../API/api";

// step1
const AppCtx = createContext();
export default function AppProvider({ children }) {
  // step2: create provider subscriber model
  //Declaring states
  const [userData, setData] = useState([]);
  const [leadData, setLeadData] = useState([]);
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await fetch(`${API}users/all`, {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data.message) {
        // console.log(data.message);
        return;
      }
      // console.log("data consoled", data);
      setData(data);
    };
    getAllUsers();
  }, [userData]);
  useEffect(() => {
    const getAllLeads = async () => {
      const response = await fetch(`${API}leads/all`, {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data.message) {
        // console.log(data.message);
        return;
      }
      // console.log("data consoled", data);
      setLeadData(data);
    };
    getAllLeads();
  }, [leadData]);
  useEffect(() => {
    const getAllRequest = async () => {
      const response = await fetch(`${API}request/all`, {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data.message) {
        // console.log(data.message);
        return;
      }
      // console.log("data consoled", data);
      setRequestData(data);
    };
    getAllRequest();
  }, [requestData]);
  return (
    <AppCtx.Provider
      value={{
        userData,
        setData,
        leadData,
        setLeadData,
        requestData,
        setRequestData,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}
export const AppState = () => {
  return useContext(AppCtx);
};
