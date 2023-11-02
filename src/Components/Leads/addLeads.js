import Base from "../../Pages/BasePage";
import { API } from "../../API/api";
import { AppState } from "../../Context/AppProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { leadSchema } from "../../Schema/schema";

export default function AddLeads() {
  // form validation
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        clientname: "",
        clientcontact: "",
        enquiry: "",
        handleby: "",
        status: "",
      },
      validationSchema: leadSchema,
      onSubmit: (newLead) => {
        addnewLead(newLead);
      },
    });

  const { leadData, setLeadData } = AppState();
  async function addnewLead(newLead) {
    //  api operations

    const response = await fetch(`${API}leads/add`, {
      method: "POST",
      body: JSON.stringify(newLead),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    // console.log(data);
    // adding newdata
    setLeadData([...leadData, data.data]);
    //if we wanted to remove data
    values.clientname = "";
    values.clientcontact = "";
    values.enquiry = "";
    values.handleby = "";
    values.status = "";
    toast.success("Lead added successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  }
  return (
    <Base>
      <div className="p-5">Please fill the form to add new lead</div>
      <div className="form-control ">
        <form onSubmit={handleSubmit}>
          <label className="input-group input-group-md m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Client Name
            </span>
            <input
              type="text"
              placeholder="Enter Client Name"
              className="input input-bordered input-md text-gray-950 font-semibold h-auto w-96"
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
              Client Contact
            </span>
            <input
              type="text"
              placeholder="Enter Client Contact"
              className="input input-bordered input-md text-gray-950 font-semibold h-auto w-96"
              style={{
                height: "auto",
                display: "block",
              }}
              value={values.clientcontact}
              onChange={handleChange}
              onBlur={handleBlur}
              name="clientcontact"
            />
          </label>
          {touched.clientcontact && errors.clientcontact ? (
            <div className="text-red-300">{errors.clientcontact}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md  m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Enquiry
            </span>
            <select
              type="text"
              placeholder="Enter Enquiry details"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.enquiry}
              onChange={handleChange}
              onBlur={handleBlur}
              name="enquiry"
            >
              <option value="" className="hidden opacity-0">
                Choose Required
              </option>
              <option value="Construction">Construction</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Flat Promoting">Flat Promoting</option>
            </select>
          </label>
          {touched.enquiry && errors.enquiry ? (
            <div className="text-red-300">{errors.enquiry}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Handleby
            </span>
            <input
              type="text"
              placeholder="Enter Handler Name"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.handleby}
              onChange={handleChange}
              onBlur={handleBlur}
              name="handleby"
            />
          </label>
          {touched.handleby && errors.handleby ? (
            <div className="text-red-300">{errors.handleby}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Status
            </span>
            <select
              type="text"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              name="status"
            >
              <option value="" className="hidden opacity-0">
                Choose status
              </option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
            </select>
          </label>
          {touched.status && errors.status ? (
            <div className="text-red-300">{errors.status}</div>
          ) : (
            ""
          )}
          <button className="btn btn-warning p-2 m-3" type="submit">
            Add Lead
          </button>
        </form>
      </div>

      {/* Include the ToastContainer */}
      <ToastContainer />
    </Base>
  );
}
