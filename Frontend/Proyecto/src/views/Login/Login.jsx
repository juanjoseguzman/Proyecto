import FormLogin from "../../component/FormLogin/FormLogin";
// import FormLoginA from "../../component/FormLoginA/FormLogin";
// import FormRegisterA from "../../component/FormRegisterA/FormRegister";
// import FormRegistro from "../../component/FormRegistro/FormRegistro";

// export default function Login() {
//   return (
//     <>
//       <div className="vistaLogin">
//         <FormLogin />
//         <FormRegistro />
//       </div>
//       </>
//   );
// }

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
