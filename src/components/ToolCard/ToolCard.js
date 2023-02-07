import * as React from "react";

import LaunchIcon from "@mui/icons-material/Launch";
import { CardContent, Button, Card, Typography, Chip } from "@mui/material";

const ToolCard = (props) => {
  return (
    <Card
      sx={{
        backgroundColor: "white",
        color: "black",
        width: "100%",
        height: "420px",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        border: "2px solid #0C0C0C",
      }}
    >
      <CardContent
        sx={{
          padding: "2rem 2rem",
          "&.MuiCardContent-root:last-child": { paddingBottom: "2rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant='h3'
          sx={{ fontSize: "1.5rem", fontWeight: 700, textTransform: "none" }}
        >
          {props.header}
        </Typography>

        {props.children}
      </CardContent>
    </Card>
  );
};

export default ToolCard;
