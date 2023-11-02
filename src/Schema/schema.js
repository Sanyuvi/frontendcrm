import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Please fill the user name"),
  email: yup.string().email().required("Please fill the valid mail address"),
  role: yup.string().required("Please fill the user role"),
  contact: yup.string().required("Please fill the user contact number"),
});

export const leadSchema = yup.object({
  clientname: yup.string().required("Please fill the client name"),
  clientcontact: yup.string().required("Please fill the client contact number"),
  enquiry: yup.string().required("Please fill the enquiry details"),
  handleby: yup.string().required("Please fill the handler name"),
  status: yup.string().required("Please fill the status"),
});

export const serviceRequestSchema = yup.object({
  clientname: yup.string().required("Please fill the client name"),
  service: yup.string().required("Please fill the required services"),
  priority: yup.string().required("Please fill the priority status"),
  status: yup.string().required("Please fill the status"),
  expectedclosing: yup
    .string()
    .required("Please fill the approx closing period"),
});
