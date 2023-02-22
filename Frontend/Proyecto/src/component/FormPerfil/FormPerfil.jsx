import { useFormik } from "formik";
import { FormPerfilSchema } from "./FormPerfilSchema";
import { initialValues } from "./formPerfil.js";
import "./formPerfil.css";
import { useAuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

export default function FormPerfil({
  nombre,
  apellidos,
  email,
  telefono,
  password,
}) {
  const { dataToken } = useAuthContext();
  const onSubmit = async (values, actions) => {
    console.log(dataToken);
    const response = await fetch(`http://localhost:3000/user/${dataToken.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      Swal.fire("Confirmado", "Cambios realizados", "success");
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: FormPerfilSchema,
    onSubmit,
  });

  return (
    <>
      <form className="formPerfil" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="nombre">Nombre: {nombre}</label>
        <input
          value={values.nombre}
          onChange={handleChange}
          id="nombre"
          type="name"
          placeholder="Modificar Nombre"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.nombre && touched.nombre && (
          <p className="error">{errors.nombre}</p>
        )}

        <label htmlFor="apellidos">Apellidos: {apellidos}</label>
        <input
          id="apellidos"
          type="name"
          placeholder="Modificar apellidos"
          value={values.apellidos}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.apellidos && touched.apellidos ? "input-error" : ""}
        />
        {errors.apellidos && touched.apellidos && (
          <p className="error">{errors.apellidos}</p>
        )}
        <label htmlFor="email">Email: {email}</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Modificar email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="telefono">Teléfono: {telefono}</label>
        <input
          value={values.telefono}
          onChange={handleChange}
          id="telefono"
          type="telefono"
          placeholder="Modificar Teléfono"
          className={errors.telefono && touched.telefono ? "input-error" : ""}
        />
        {errors.telefono && touched.telefono && (
          <p className="error">{errors.telefono}</p>
        )}
        <label htmlFor="password">Password: {password}</label>
        <input
          id="password"
          type="password"
          placeholder="Modificar Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirmar Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button className="button" disabled={isSubmitting} type="submit">
          Comfirmar Cambios
        </button>
      </form>
    </>
  );
}
