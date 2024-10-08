import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MainHeading } from "./MainHeading";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import business1 from "../assets/images/business1.svg";
import business2 from "../assets/images/business2.svg";
import business3 from "../assets/images/business3.svg";
import {
  ArrowBack,
  ArrowForward,
  KeyboardArrowRight,
} from "@mui/icons-material";

const data = [
  {
    id: 1,
    title: "Developing a working software application",
    label: "Race98 - 03 June 2023",
    img: business1,
  },
  {
    id: 2,
    title: "No pure fiber vs DSL internet",
    label: "Race98 - 03 June 2023",
    img: business2,
  },
  {
    id: 3,
    title: "Guards vs Virtual Security",
    label: "Race98 - 03 June 2023",
    img: business3,
  },
];
export function PathToBusiness() {
  const swiperRef = useRef(null);
  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <Grid container sx={{ marginBottom: "100px" }}>
      <Grid item xs={12} lg={9} sx={{ marginBottom: "100px" }}>
        <MainHeading title="Path To A Successful Business" />
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Box
          sx={{
            background: "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
            color: "#fff",
            width: "80px",
            height: "44px",
            borderRadius: "10px",

            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <ArrowBack onClick={goPrev} />
          <ArrowForward onClick={goNext} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            // padding: "0 20px",
          }}
        >
          <Swiper
            loop={true} // Enable loop mode
            navigation={false} // Disable built-in navigation
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            speed={600} // Speed of the slide transition
            ref={swiperRef}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    position: "relative",
                    height: "477px",
                    width: { xs: "100%", lg: "350px" },
                    margin: "0 auto",
                  }}
                >
                  <img src={item.img} style={{ width: "100%" }} />
                  <Box
                    sx={{
                      width: "inherit",
                      height: "50%",
                      borderRadius: "6px",
                      background:
                        "linear-gradient(0deg, #F2F2F2 35.23%, rgba(242, 242, 242, 0.00) 100%)",
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <Box sx={{ padding: "0 50px" }}>
                      <Typography
                        sx={{
                          color: "rgba(38, 38, 38, 0.6)",
                          fontSize: "10px",
                          fontWeight: 500,
                          fontFamily: "DM Sans",
                          paddingTop: "90px",
                          marginBottom: "10px",
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#262626",
                          fontSize: "16px",
                          fontWeight: 400,
                          fontFamily: "DM Sans",
                          marginBottom: "14px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      padding: "0 50px",
                      bottom: "20px", // 20px from bottom
                      left: 0, // Align the button to the left of the parent box
                      right: 0, // Align the button to the right of the parent box
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        padding: "8px 40px",
                        width: "100%",
                        background:
                          "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                        borderRadius: "3px",
                        color: "#fff",
                        textTransform: "capitalize",
                        boxShadow: "none",
                        fontFamily: "DM Sans",
                        fontWeight: 500,
                        fontSize: "14px",
                        //   cursor: "auto",

                        "&:hover": {
                          background:
                            "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                          color: "#fff",
                        },
                      }}
                    >
                      Learn More{" "}
                      <KeyboardArrowRight sx={{ marginLeft: "27px" }} />
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box
            position="absolute"
            top="45%"
            sx={{
              left: { xs: "20px", lg: "-40px" },
              zIndex: 10,
              transform: "translateY(-50%)",
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={goPrev}
              sx={{
                background:
                  "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                color: "#fff",
                padding: "10px",
                width: "50px",
                height: "50px",
                borderRadius: "6px",
                "&:hover": {
                  color: "#fff",
                  background:
                    "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                },
              }}
            >
              <ArrowBack />
            </IconButton>
          </Box>
          <Box
            position="absolute"
            top="45%"
            sx={{
              right: { xs: "20px", lg: "-40px" },
              zIndex: 10,
              transform: "translateY(-50%)",
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={goNext}
              sx={{
                color: "#fff",
                background:
                  "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                width: "50px",
                height: "50px",
                borderRadius: "6px",
                padding: "10px",
                "&:hover": {
                  color: "#fff",
                  background:
                    "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                },
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
