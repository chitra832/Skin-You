import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import doctor from "../assets/images/doctor.png";
import body from "../assets/images/body.png";
import tatoo from "../assets/images/tatoo.png";
import fat from "../assets/images/fat.png";
import botox from "../assets/images/botox.png";
import face from "../assets/images/face.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Autoplay } from "swiper/modules";
import React, { useRef } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export function About() {
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const content = [
    {
      image: body,
      title: "Body & face laser hair removal",
      description:
        "Experience smooth, hair-free skin with our advanced, pain-...",
    },
    {
      image: tatoo,
      title: "Tattoo removal",
      description:
        "Safely erase unwanted tattoos with precision laser treatments,...",
    },
    {
      image: fat,
      title: "Fat Loss & Inch loss",
      description: "Achieve your body goals with non-invasive, targeted fat...",
    },
    {
      image: botox,
      title: "Botox",
      description:
        "Effortlessly smooth wrinkles and rejuvenate your skin with our...",
    },
    {
      image: face,
      title: "Body and Face Tightening",
      description:
        "Lift and tighten sagging skin with our cutting-edge, non-surgical...",
    },
  ];

  // Unique background colors for each box
  const colors = ["#f6fbef", "#fff", "#fcf8ec", "#fff", "#f2fcfc"];

  const btnColor = ["#bcd69b", "#e4aed1", "#efdba2", "#f7b1b0", "#a8d9d8"];

  const imgBg = ["#fff", "#fff9fd", "#fff", "#fff7f7", "#fff"];

  return (
    <>
      <Grid
        container
        sx={{
          padding: { xs: "80px 30px", md: "80px 100px", lg: "80px 200px" },
        }}
      >
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: { xs: "272px", lg: "362px" },
              margin: { xs: "0 auto", md: 0 },
            }}
          >
            <img src={doctor} style={{ width: "inherit" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} sx={{ marginTop: { xs: "40px", md: 0 } }}>
          <Typography
            sx={{
              color: "#FE9B8E",
              fontFamily: "Great Vibes",
              fontWeight: 600,
              fontSize: "32px",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              color: "#1D2A4D",
              fontFamily: "Marcellus",
              fontSize: { xs: "32px", lg: "51px" },
              fontWeight: 600,
            }}
          >
            DR. GEETA MEHRA FAZALBHOY
          </Typography>
          <Typography
            sx={{
              color: "#848E9F",
              fontFamily: "Marcellus",
              fontSize: "16px",
              mt: 3,
            }}
          >
            Dr. Geeta Mehra Fazalbhoy, MD & Founder of Skin & You Clinic,
            Mumbai, is a globally recognized expert in dermatology and aesthetic
            medicine. With advanced international training and certifications,
            she specializes in cutting-edge, pain-free treatments for skin
            tightening, pigmentation, and body contouring. Her clinic is ranked
            among the top in India, attracting patients worldwide.
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                padding: "12px 30px",
                background: "#FE9B8E",
                borderRadius: "10px",
                color: "#fff",
                fontFamily: "Marcellus",
                textTransform: "uppercase",
                fontSize: "20px",
                "&:hover": {
                  background: "#FE9B8E",
                  color: "#fff",
                },
              }}
            >
              Know More
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: "12px 30px",
                background: "#FE9B8E",
                marginLeft: { md: "14px" },
                marginTop: { xs: "30px", md: 0 },
                borderRadius: "10px",
                color: "#fff",
                fontFamily: "Marcellus",
                fontSize: "20px",
                textTransform: "uppercase",
                "&:hover": {
                  background: "#FE9B8E",
                  color: "#fff",
                },
              }}
            >
              Instagram
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Desktop Grid Layout */}
      <Grid container spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
        {content.map((item, index) => (
          <Grid item xs={12} md={2.4} key={index}>
            <Box
              sx={{
                background: colors[index],
                padding: "0 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "380px",
              }}
            >
              <Box
                sx={{
                  width: "120px",
                  height: "120px",
                  background: imgBg[index],
                  borderRadius: "50%",
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  style={{ height: "80px" }}
                  alt={item.title}
                />
              </Box>
              <Typography
                sx={{
                  color: "#1D2A4D",
                  fontFamily: "Marcellus",
                  fontSize: "23px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: "#848E9F",
                  fontFamily: "Marcellus",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                {item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  padding: "16px 48px",
                  background: btnColor[index],
                  borderRadius: "30px",
                  textTransform: "capitalize",
                  marginTop: "10px",
                  marginBottom: "6px",
                  color: "#848E9F",
                  fontFamily: "Marcellus",
                  fontSize: "16px",
                  "&:hover": {
                    background: btnColor[index],
                    color: "#848E9F",
                  },
                }}
              >
                Know More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Mobile Carousel Layout */}
      <Box sx={{ display: { xs: "block", md: "none" }, position: "relative" }}>
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Number of slides to show at once
          ref={swiperRef}
          autoplay={{
            delay: 2000, // Delay between transitions in milliseconds
            disableOnInteraction: false, // Allow autoplay to continue after user interactions
          }}
          navigation={false}
          modules={[Autoplay]} // Use the Autoplay module
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  background: colors[index],
                  padding: "0 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  height: "380px",
                }}
              >
                <Box
                  sx={{
                    width: "120px",
                    height: "120px",
                    background: imgBg[index],
                    borderRadius: "50%",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    style={{ height: "80px" }}
                    alt={item.title}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#1D2A4D",
                    fontFamily: "Marcellus",
                    fontSize: "23px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#848E9F",
                    fontFamily: "Marcellus",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: "16px 48px",
                    background: btnColor[index],
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    marginTop: "10px",
                    marginBottom: "6px",
                    color: "#848E9F",
                    fontFamily: "Marcellus",
                    fontSize: "16px",
                    "&:hover": {
                      background: btnColor[index],
                      color: "#848E9F",
                    },
                  }}
                >
                  Know More
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "16px",
            zIndex: 10,
            mt: 2,
          }}
        >
          <IconButton
            sx={{
              background: "#FFE5D7",
              border: "2px solid #FE9B8E",
              width: "30px",
              height: "30px",
            }}
            onClick={goPrev}
          >
            <KeyboardArrowLeft sx={{ color: "#FE9B8E" }} />
          </IconButton>
          <IconButton
            sx={{
              background: "#FFE5D7",
              border: "2px solid #FE9B8E",
              width: "30px",
              height: "30px",
            }}
            onClick={goNext}
          >
            <KeyboardArrowRight sx={{ color: "#FE9B8E" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
