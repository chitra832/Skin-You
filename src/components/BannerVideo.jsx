import React from "react";
import { Box, Button, Typography } from "@mui/material";
import video from "../assets/videos/video.mp4";

export function BannerVideo() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minHeight: "100vh",
          minWidth: "100%",
          width: "auto",
          height: "auto",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          objectFit: "cover", // Ensures the video covers the area without being stretched
        }}
      />

      {/* Content Overlaid on Video */}
      <Box
        sx={{
          position: "absolute", // Ensure it's positioned relative to the parent
          top: "60%", // Moves the top edge to 50% of the container's height
          left: "52%", // Optional: If you want it horizontally centered, you can use this
          transform: "translate(-50%, -50%)", // Moves the box by 50% of its height and width to fully center it
          zIndex: 1,
          textAlign: "left",
          paddingLeft: { xs: "10px", lg: "120px" }, // Maintain padding
          width: "100%", // Make sure the content takes full width
        }}
      >
        <Typography
          sx={{
            color: "#FE9B8E",
            fontFamily: "Marcellus",
            fontSize: { xs: "30px", md: "36px" },
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Look Better
          <br />
          Feel Better
        </Typography>
        <Typography
          sx={{
            color: "#000",
            fontFamily: "Marcellus",
            fontSize: "20px",
          }}
        >
          Instantly Smooth Away Wrinkles and Scars for a Fresh,
          <br /> Youthful Glow
        </Typography>
        <Box sx={{ marginTop: "60px" }}>
          <Button
            variant="contained"
            sx={{
              padding: "20px 45px",
              background: "#fff",
              borderRadius: "10px",
              color: "#000",
              fontFamily: "Marcellus",
              textTransform: "capitalize",
              fontSize: "20px",
              fontWeight: 600,
              "&:hover": {
                background: "#FE9B8E",
                color: "#fff",
              },
            }}
          >
            Call Now
          </Button>
          <Button
            variant="contained"
            sx={{
              padding: "20px 45px",
              background: "#fff",
              marginLeft: { md: "45px" },
              marginTop: { xs: "30px", md: 0 },
              fontWeight: 600,
              borderRadius: "10px",
              color: "#000",
              fontFamily: "Marcellus",
              fontSize: "20px",
              textTransform: "capitalize",
              "&:hover": {
                background: "#FE9B8E",
                color: "#fff",
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
