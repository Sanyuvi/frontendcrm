import { API } from "../../API/api";
import { AppState } from "../../Context/AppProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { userSchema } from "../../Schema/schema";
import Base from "../../Pages/BasePage";

export default function AddUsers() {
  // form validation
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        role: "",
        contact: "",
      },
      validationSchema: userSchema,
      onSubmit: (newUser) => {
        addnewUser(newUser);
      },
    });

  const { userData, setData } = AppState();
  async function addnewUser(newUser) {
    //  api operations

    const response = await fetch(`${API}users/add`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    // console.log(data);
    // adding newdata
    setData([...userData, data.data]);
    //if we wanted to remove data
    values.name = "";
    values.email = "";
    values.role = "";
    values.contact = "";
    toast.success("User added successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  }
  return (
    <Base>
      <div className="p-5">Please fill the form to add new user</div>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <label className="input-group input-group-md m-5 ">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Name
            </span>
            <input
              type="text"
              placeholder="Enter User Name"
              className="input input-bordered input-md text-gray-950 font-semibold w-96 "
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
            />
          </label>
          {touched.name && errors.name ? (
            <div className="text-red-300">{errors.name}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md  m-5 ">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Email
            </span>
            <input
              type="text"
              placeholder="Enter User Email"
              className="input input-bordered input-md text-gray-950 font-semibold w-96 "
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
          </label>
          {touched.email && errors.email ? (
            <div className="text-red-300">{errors.email}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md  m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Role
            </span>
            <input
              type="text"
              placeholder="Enter User Role"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              name="role"
            />
          </label>
          {touched.role && errors.role ? (
            <div className="text-red-300">{errors.role}</div>
          ) : (
            ""
          )}
          <label className="input-group input-group-md m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Contact
            </span>
            <input
              type="text"
              placeholder="Enter User contact"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
              name="contact"
            />
          </label>
          {touched.contact && errors.contact ? (
            <div className="text-red-300">{errors.contact}</div>
          ) : (
            ""
          )}
          <button className="btn btn-warning p-2 m-3" type="submit">
            Add User
          </button>
        </form>
      </div>

      {/* Include the ToastContainer */}
      <ToastContainer />
    </Base>
  );
}
