import Base from "../../Pages/BasePage";
import { useNavigate, useParams } from "react-router-dom";
import { AppState } from "../../Context/AppProvider";
import { API } from "../../API/api";
import { useFormik } from "formik";
import { leadSchema } from "../../Schema/schema";

export default function EditLead() {
  const { leadData, setLeadData } = AppState();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedLead = leadData.find((lead) => lead._id === id);
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        clientname: selectedLead?.clientname || "",
        clientcontact: selectedLead?.clientcontact || "",
        enquiry: selectedLead?.enquiry || "",
        handleby: selectedLead?.handleby || "",
        status: selectedLead?.status || "",
      },
      validationSchema: leadSchema,
      onSubmit: async (values) => {
        const editedLeadObject = {
          clientname: values.clientname,
          clientcontact: values.clientcontact,
          enquiry: values.enquiry,
          handleby: values.handleby,
          status: values.status,
        };

        // api operations
        const response = await fetch(`${API}leads/edit/${id}`, {
          method: "PUT",
          body: JSON.stringify(editedLeadObject),
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        });

        const data = await response.json();
        // console.log(data);
        // we need to find the index
        const editIndex = leadData.findIndex((lead, index) => lead.id === id);
        // console.log(editIndex);
        leadData[editIndex] = data;
        setLeadData([...leadData]);
        navigate("/leads/all");
      },
    });

  return (
    <Base>
      <div className="p-5">Please Fill the form to add Edit Lead</div>
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
              Client Contact
            </span>
            <input
              type="text"
              placeholder="Enter Client Contact"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
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
              status
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
              <option value="Contacted">Contacted</option>
            </select>
          </label>
          {touched.status && errors.status ? (
            <div className="text-red-300">{errors.status}</div>
          ) : (
            ""
          )}
          <button className="btn btn-warning p-2 m-3">Edit Lead</button>
        </form>
      </div>
    </Base>
  );
}
