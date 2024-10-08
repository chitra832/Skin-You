import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import medal from "../../assets/images/medal.svg";

const carouselData = [
  {
    title: "Professional IT Solutions Tailored to Your Needs",
    subtitle:
      "First see the results we get you before paying us.<br/>Your Vision, Our Code : Custom Web & Mobile Solutions",
  },
  {
    title: "Slide 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada tristique justo quis ultrices.",
  },
  {
    title: "Slide 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada tristique justo quis ultrices.",
  },
];

export function BannerCarousel() {
  const swiperRef = useRef(null);

  return (
    <Grid container sx={{ background: "grey" }}>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 150px)",
            position: "relative",
          }}
        >
          <Swiper
            loop={true} // Enable loop mode
            navigation={false} // Disable built-in navigation
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1500: {
                slidesPerView: 1,
              },
            }}
            speed={600} // Speed of the slide transition
            ref={swiperRef}
          >
            {carouselData.map((item, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#000",
                      fontFamily: "Urbanist",
                      fontSize: { xs: "30px", lg: "96px" },
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#A5A5A5",
                      fontFamily: "DM Sans",
                      fontSize: "20px",
                      fontWeight: 400,
                      textAlign: "center",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.subtitle }} // Use dangerouslySetInnerHTML
                  />
                  <Button
                    variant="contained"
                    sx={{
                      padding: "16px 25px",
                      background:
                        "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                      borderRadius: "60px",
                      color: "#fff",
                      boxShadow: "none",
                      fontFamily: "DM Sans",
                      fontWeight: 400,
                      fontSize: "14px",
                      cursor: "auto",
                      textTransform: "uppercase",
                      "&:hover": {
                        background:
                          "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
                        color: "#fff",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </SwiperSlide>
            ))}

            {/* Custom Pagination */}
            <div
              className="swiper-pagination"
              style={{ textAlign: "center", marginTop: "20px" }}
            ></div>
          </Swiper>
        </Box>
      </Grid>
      {/* Custom Swiper CSS for styling navigation dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(38, 38, 38, 0.6);
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
        }
        .swiper-pagination-bullet-active {
          background: #ff3131;
          width: 18px; /* Increased width for the active dot */
          height: 18px;
          margin-top: "12px";
        }
      `}</style>

      <Grid item xs={12} sx={{ margin: { xs: "60px", lg: "100px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={medal} />
          <Typography
            sx={{
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.56)",
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            10+ years of expertise in serving North American clients, now
            expanding our services globally
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
