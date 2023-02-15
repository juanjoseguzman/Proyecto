import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const FormPerfilSchema = yup.object().shape({
  nombre: yup.string(),
  apellidos: yup.string(),
  telefono: yup.number(),
  email: yup.string().email("Please enter a valid email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" }),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default FormPerfilSchema;
