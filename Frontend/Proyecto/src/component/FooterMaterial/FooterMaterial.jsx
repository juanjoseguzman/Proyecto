// import * as React from "react";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import { Grid } from "@mui/material";

// export default function FooterMaterial() {
//   function Copyright(props) {
//     return (
//       <Typography
//         variant="body2"
//         color="text.secondary"
//         align="center"
//         {...props}
//       >
//         {"Copyright © "}
//         <Link color="inherit" href="##">
//           Global Solutions Prefabrquee
//         </Link>{" "}
//         {new Date().getFullYear()}
//         {"."}
//       </Typography>
//     );
//   }

//   const footers = [
//     {
//       title: "Company",
//       description: ["Team", "History", "Contact us", "Locations"],
//     },
//     {
//       title: "Legal",
//       description: ["Privacy policy", "Terms of use"],
//     },
//   ];

//   return (
//     <Container
//       maxWidth="xl"
//       component="footer"
//       sx={{
//         borderTop: (theme) => `1px solid ${theme.palette.divider}`,
//         mt: 8,
//         py: [3, 6],
//       }}
//     >
//       <Grid container spacing={2} justifyContent="space-evenly">
//         {footers.map((footer) => (
//           <Grid item xs={6} sm={3} key={footer.title}>
//             <Typography variant="h6" color="text.primary" gutterBottom>
//               {footer.title}
//             </Typography>
//             <ul>
//               {footer.description.map((item) => (
//                 <li key={item}>
//                   <Link href="#" variant="subtitle1" color="text.secondary">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </Grid>
//         ))}
//       </Grid>
//       <Copyright sx={{ mt: 5 }} />
//     </Container>
//   );
// }

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Grid,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";

export default function FooterMaterial() {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="##">
          Global Solutions Prefabrquee
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container
      maxWidth="xl"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={2} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Subscribe
          </Typography>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </Grid>
      </Grid>
      <form>
        <input type="email" placeholder="Email Address" />
        <br />
        <input type="checkbox" /> Acepto las políticas de privacidad
        <br />
        <button type="submit">Subscribe</button>
      </form>
      <form>
        <input type="email" placeholder="Email Address" />
        <br />
        <input type="checkbox" /> Acepto las políticas de privacidad
        <br />
        <button type="submit">Subscribe</button>
      </form>
      <br />
      <Link href="https://www.facebook.com/tusitio" target="_blank">
        <i className="fa fa-facebook-square fa-2x" />
      </Link>
    </Container>
  );
}
