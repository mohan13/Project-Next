import * as yup from "yup";
export const Schema = yup.object().shape({
  email: yup.string().email().required("email is required !"),
  fullname: yup.string().matches(/^[A-z]+$/ , 'Is not in correct format').required("Your Name is empty!"),
  password: yup.string().required("password is required !"),
});
