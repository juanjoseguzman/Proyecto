import { Link as ReactRouterLink } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(ReactRouterLink)(() => ({
  textDecoration: "none",
}));

export default function Link({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
