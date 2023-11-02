import Base from "../../Pages/BasePage";
import { API } from "../../API/api";
import { AppState } from "../../Context/AppProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { serviceRequestSchema } from "../../Schema/schema";

export default function AddRequest() {
  // form validation
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        clientname: "",
        service: "",
        priority: "",
        status: "",
        expectedclosing: "",
      },
      validationSchema: serviceRequestSchema,
      onSubmit: (newRequest) => {
        addnewRequest(newRequest);
      },
    });

  const { requestData, setRequestData } = AppState();
  async function addnewRequest(newRequest) {
    //  api operations

    const response = await fetch(`${API}request/add`, {
      method: "POST",
      body: JSON.stringify(newRequest),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    // console.log(data);
    // adding newdata
    setRequestData([...requestData, data.data]);
    //if we wanted to remove data
    values.clientname = "";
    values.service = "";
    values.priority = "";
    values.status = "";
    values.expectedclosing = "";
    toast.success("Request added successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  }
  return (
    <Base>
      <div className="p-5">Please fill the form to add new request</div>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <label className="input-group input-group-md  m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Client Name
            </span>
            <input
              type="text"
              placeholder="Enter Client Name"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              style={{
                height: "auto",
                display: "block",
              }}
              value={values.clientname}
              onChange={handleChange}
              onBlur={handleBlur}
              name="clientname"
            />
          </label>
          {touched.clientname && errors.clientname ? (
            <div className="text-red-300">{errors.clientname}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md  m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Service
            </span>
            <select
              type="text"
              placeholder="Enter the required service "
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.service}
              onChange={handleChange}
              onBlur={handleBlur}
              name="service"
            >
              <option value="" className="hidden opacity-0 ">
                Choose Required Services
              </option>
              <option value="Construction">Construction</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Flat Promoting">Flat Promoting</option>
            </select>
          </label>
          {touched.service && errors.service ? (
            <div className="text-red-300">{errors.service}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md  m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Priority
            </span>
            <input
              type="text"
              placeholder="Enter priority status"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.priority}
              onChange={handleChange}
              onBlur={handleBlur}
              name="priority"
            />
          </label>
          {touched.priority && errors.priority ? (
            <div className="text-red-300">{errors.priority}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Status
            </span>
            <select
              type="text"
              placeholder="Enter Status"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              name="status"
            >
              <option value="" className="hidden opacity-0 ">
                Choose status
              </option>
              <option value="New">New</option>
              <option value="Closed">Contacted</option>
            </select>
          </label>
          {touched.status && errors.status ? (
            <div className="text-red-300">{errors.status}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Expected Closing
            </span>
            <input
              type="text"
              placeholder="Enter approx closing period"
              className="input input-bordered input-md h-auto text-gray-950 font-semibold w-96"
              style={{
                height: "auto",
                display: "block",
              }}
              value={values.expectedclosing}
              onChange={handleChange}
              onBlur={handleBlur}
              name="expectedclosing"
            />
          </label>
          {touched.expectedclosing && errors.expectedclosing ? (
            <div className="text-red-300">{errors.expectedclosing}</div>
          ) : (
            ""
          )}
          <button className="btn btn-warning p-2 m-3" type="submit">
            Add Request
          </button>
        </form>
      </div>

      {/* Include the ToastContainer */}
      <ToastContainer />
    </Base>
  );
}
