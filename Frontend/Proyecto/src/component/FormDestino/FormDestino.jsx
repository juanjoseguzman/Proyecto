import { useFormik } from "formik";
import { FormPerfilSchema } from "../FormPerfil/FormPerfilSchema";
import { initialValues } from "../FormPerfil/formPerfil.js";
import "../FormPerfil/formPerfil.css";
import { useAuthContext } from "../../Context/AuthContext";
import "./formDestino.css";

export default function FormPerfil({
  nombre,
  apellidos,
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
          <h3>Producto Llave en Mano</h3>
          <h5>
            En Exity nos encargamos de todo lo que necesita un destino, creamos
            la aventura de forma personalizada, creamos ilustraciones o
            realizamos las fotos de los lugares, hacemos pruebas de campo para
            asegurarnos de que todo funciona, la damos de alta en el sistema y
            os generamos un acceso mediante el que puedes acceder a todos los
            datos de uso de la aplicación. Conoce más en nuestro dossier.
          </h5>
          <div className="ruta-mapa">
            <img src="../src/assets/ruta-exity.png" width="400px" />
          </div>
        </div>
        <div className="destino">
          <h3>¿Quieres Exity en tu Destino?</h3>
          <h5>
            Rellena el siguiente formulario y nos pondremos en contacto contigo
          </h5>
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

            <label htmlFor="apellidos">Apellidos: {apellidos}</label>
            <input
              id="apellidos"
              type="name"
              placeholder="Modificar apellidos"
              value={values.apellidos}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.apellidos && touched.apellidos ? "input-error" : ""
              }
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
              className={
                errors.telefono && touched.telefono ? "input-error" : ""
              }
            />
            {errors.telefono && touched.telefono && (
              <p className="error">{errors.telefono}</p>
            )}

            <label htmlFor="texto">Dejanos un mensaje: {texto}</label>
            <textarea
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
