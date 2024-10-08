import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import reel from "../assets/videos/reel.mp4";
import reel2 from "../assets/videos/reel2.mp4";
import reel3 from "../assets/videos/reel3.mp4";

const videoLinks = [
  {
    video: reel,
    title: "Noticing white patches on your back or chest?",
    link: "https://www.instagram.com/reel/DAiSuQpSX7k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    video: reel2,
    title: "Thinking those deep ‘pores’ will never go away?",
    link: "https://www.instagram.com/reel/DA0ktWTSnAZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    video: reel3,
    title:
      "I’ve got you covered with these simple, dermatologist-approved tips!",
    link: "https://www.instagram.com/reel/DAsynqeIMxJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export function InstagramPost() {
  return (
    <Grid
      container
      sx={{ padding: { xs: "50px 20px", md: "50px 100px", lg: "50px 120px" } }}
    >
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: "#FE9B8E",
            fontFamily: "Great Vibes",
            fontWeight: 600,
            fontSize: "32px",
          }}
        >
          Latest
        </Typography>
        <Typography
          sx={{
            color: "#1D2A4D",
            fontFamily: "Marcellus",
            fontSize: { xs: "32px", lg: "51px" },
            fontWeight: 600,
          }}
        >
          Instagram Post
        </Typography>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {videoLinks.map((videoData, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <video
              controls
              autoPlay
              loop
              muted
              width="100%"
              height="300"
              style={{ borderRadius: "10px" }}
              title={`Instagram Post ${index + 1}`}
            >
              <source src={videoData.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Typography
              sx={{
                marginTop: "24px",
                cursor: "pointer",
                color: "#1D2A4D",
                fontSize: "27px",
                fontFamily: "Marcellus",
              }}
              onClick={() => window.open(videoData.link, "_blank")} // Opens link in a new tab
            >
              {videoData.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{
            padding: "12px 30px",
            background: "#FE9B8E",
            borderRadius: "10px",
            color: "#000",
            fontFamily: "Marcellus",
            textTransform: "uppercase",
            fontSize: "18px",
            "&:hover": {
              background: "#FE9B8E",
              color: "#000",
            },
          }}
        >
          Load More
        </Button>
      </Grid>
    </Grid>
  );
}
