import { useState } from "react";
import FormRegisterA from "../../component/FormRegisterA/FormRegister";
import FormLoginA from "../../component/FormLoginA/FormLogin";

export default function Login() {
  document.title = "Login/Register";
  const [view, setView] = useState(true);
  return (
    <>
      {!view ? (
        <FormRegisterA vista={view} estado={setView} />
      ) : (
        <FormLoginA vista={view} estado={setView} />
      )}
    </>
  );
}
