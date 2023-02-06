import React from "react";

import { Container } from "@mui/material";

const Wrapper = (props) => {
  return <Container maxWidth='lg'>{props.children}</Container>;
};

export default Wrapper;
