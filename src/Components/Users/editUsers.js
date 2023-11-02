import Base from "../../Pages/BasePage";
import { useNavigate, useParams } from "react-router-dom";
import { AppState } from "../../Context/AppProvider";
import { API } from "../../API/api";
import { useFormik } from "formik";
import { userSchema } from "../../Schema/schema";

export default function EditUser() {
  const { userData, setData } = AppState();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedUser = userData.find((user) => user._id === id);
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: selectedUser?.name || "",
        email: selectedUser?.email || "",
        role: selectedUser?.role || "",
        contact: selectedUser?.contact || "",
      },
      validationSchema: userSchema,
      onSubmit: async (values) => {
        const editedUserObject = {
          name: values.name,
          email: values.email,
          role: values.role,
          contact: values.contact,
        };

        // api operations
        const response = await fetch(`${API}users/edit/${id}`, {
          method: "PUT",
          body: JSON.stringify(editedUserObject),
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        });

        const data = await response.json();
        // console.log(data);
        // we need to find the index
        const editIndex = userData.findIndex((user, index) => user.id === id);
        // console.log(editIndex);
        userData[editIndex] = data;
        setData([...userData]);
        navigate("/users/all");
      },
    });

  return (
    <Base>
      <div className="p-5">Please Fill the form to add Edit User</div>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <label className="input-group input-group-md m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Name
            </span>
            <input
              type="text"
              placeholder="Enter User Name"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
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
          <label className="input-group input-group-md  m-5">
            <span className="w-20 text-gray-950 font-semibold text-align-center">
              Email
            </span>
            <input
              type="text"
              placeholder="Enter User Email"
              className="input input-bordered input-md text-gray-950 font-semibold w-96"
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
            Edit User
          </button>
        </form>
      </div>
    </Base>
  );
}
