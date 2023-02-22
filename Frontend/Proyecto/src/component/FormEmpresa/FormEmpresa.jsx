import { useFormik } from "formik";
import { FormPerfilSchema } from "../FormPerfil/FormPerfilSchema";
import { initialValues } from "../FormPerfil/formPerfil.js";
import "../FormPerfil/formPerfil.css";
import { useAuthContext } from "../../Context/AuthContext";
import "./formEmpresa.css";

export default function FormPerfil({
  nombre,
  empresa,
  email,
  telefono,
  texto,
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
      <div className="llave-destino">
        <div className="llave">
          <h3>Nuestro Objetivo para tu empresa</h3>
          <h5>
            Cada empresa, cada grupo de personas necesita una dinámica concreta,
            por eso todas nuestras aventuras y trabajos son personalizados.
            Rellena el formulario para que contactemos con vosotros y poder
            comenzar a trabajar juntos. Redescubre tu empresa. Redescubre tu
            equipo
          </h5>
          <div className="ruta-mapa">
            <img src="../src/assets/rutaxxx.png" width="200px" />
          </div>
        </div>
        <div className="destino">
          <h3>¿Quieres Exity en tu Empresa?</h3>

          <form
            className="formPerfil"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
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

            <label htmlFor="empresa">Empresa: {empresa}</label>
            <input
              id="empresa"
              type="name"
              placeholder="Empresa"
              value={values.empresa}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.empresa && touched.empresa ? "input-error" : ""}
            />
            {errors.empresa && touched.empresa && (
              <p className="error">{errors.empresa}</p>
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
              className={
                errors.telefono && touched.telefono ? "input-error" : ""
              }
            />
            {errors.telefono && touched.telefono && (
              <p className="error">{errors.telefono}</p>
            )}

            <label htmlFor="texto">Dejanos un mensaje: {texto}</label>
            <input
              value={values.texto}
              onChange={handleChange}
              id="texto"
              type="text"
              placeholder="Escribir mensaje"
              className={errors.email && touched.email ? "input-error" : ""}
              style={{ width: "100%", height: "120px" }}
            />
            {errors.nombre && touched.nombre && (
              <p className="error">{errors.nombre}</p>
            )}

            <button className="button" disabled={isSubmitting} type="submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
