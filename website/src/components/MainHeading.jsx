import { Typography } from "@mui/material";
import React from "react";

export function MainHeading({ title, align = "left" }) {
  return (
    <Typography
      sx={{
        color: "#000",
        fontFamily: "DM Sans",
        fontSize: {
          xs: "30px",
          md: "40px",
          fontWeight: 700,
          textTransform: "capitalize",
          textAlign: align,
        },
      }}
    >
      {title}
    </Typography>
  );
}
