import Base from "../../Pages/BasePage";
import { useNavigate, useParams } from "react-router-dom";
import { AppState } from "../../Context/AppProvider";
import { API } from "../../API/api";
import { useFormik } from "formik";
import { serviceRequestSchema } from "../../Schema/schema";

export default function EditRequest() {
  const { requestData, setRequestData } = AppState();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedRequest = requestData.find((request) => request._id === id);
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        clientname: selectedRequest?.clientname || "",
        service: selectedRequest?.service || "",
        priority: selectedRequest?.priority || "",
        status: selectedRequest?.status || "",
        expectedclosing: selectedRequest?.expectedclosing || "",
      },
      validationSchema: serviceRequestSchema,
      onSubmit: async (values) => {
        const editedRequestObject = {
          clientname: values.clientname,
          service: values.service,
          priority: values.priority,
          status: values.status,
          expectedclosing: values.expectedclosing,
        };

        // api operations
        const response = await fetch(`${API}request/edit/${id}`, {
          method: "PUT",
          body: JSON.stringify(editedRequestObject),
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        });

        const data = await response.json();
        // console.log(data);
        // we need to find the index
        const editIndex = requestData.findIndex(
          (request, index) => request.id === id
        );
        // console.log(editIndex);
        requestData[editIndex] = data;
        setRequestData([...requestData]);
        navigate("/request/all");
      },
    });

  return (
    <Base>
      <div className="p-5">Please Fill the form to add Edit Request</div>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <label className="input-group input-group-md m-5">
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
              <option value="New">New</option>
              <option value="Closed">Closed</option>
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
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
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
            Edit Request
          </button>
        </form>
      </div>
    </Base>
  );
}
