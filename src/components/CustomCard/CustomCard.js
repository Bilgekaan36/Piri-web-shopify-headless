import * as React from "react";

import LaunchIcon from "@mui/icons-material/Launch";
import { CardContent, Button, Card, Typography, Chip } from "@mui/material";

const CustomCard = (props) => {
  return (
    <Card
      sx={{
        backgroundColor: "#2A3443",
        color: "white",
        width: "100%",
        height: "390px",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <CardContent
        sx={{
          padding: "3rem 2rem",
          "&.MuiCardContent-root:last-child": { paddingBottom: "2rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Button
          href={props.headerLink}
          variant='text'
          endIcon={<LaunchIcon />}
          sx={{
            color: "white",
            ":hover": { backgroundColor: "transparent" },
            padding: "0",
          }}
        >
          <Typography
            variant='h3'
            sx={{ fontSize: "1.25rem", fontWeight: 700, textTransform: "none" }}
          >
            {props.header}
          </Typography>
        </Button>
        <Typography
          variant='body1'
          sx={{ padding: "0.75rem 0", color: "#9DA3AF" }}
        >
          {props.content}
        </Typography>
        <Chip
          label={props.firstLinkItem}
          component='a'
          href={props.firstLink}
          sx={{ color: "white", marginBottom: "6px" }}
          clickable
        />
        <Chip
          label={props.secondLinkItem}
          component='a'
          href={props.secondLink}
          sx={{ color: "white", marginBottom: "6px" }}
          clickable
        />
        <Chip
          label={props.thirdLinkItem}
          component='a'
          href={props.thirdLink}
          sx={{ color: "white" }}
          clickable
        />
      </CardContent>
    </Card>
  );
};

export default CustomCard;
