
import { Box, Stack } from "@mui/material";
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import WestIcon from "@mui/icons-material/West"
import EastIcon from "@mui/icons-material/East"
import TrendPropertyCard from "./TrendPropertyCard";
import TopPropertyCard from "./TopPropertCard";


const TopProperties = () => {
    const [topProperties, setTrendProperties] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7
    ]);

    return (
        <Stack className="top-properties" >
            <Stack className="container" >
                <Stack className="info-box" >
                    <Box className="left" >
                        <span>Top Properties</span>
                        <p>Check out Top Properties</p>
                    </Box>
                    <Box className="right" >
                        <div className="pagination-box" >
                            <WestIcon  className="swiper-trend-prev" />
                            <div className="swiper-trend-pagination" ></div>
                            <EastIcon className="swiper-trend-next" />
                            
                        </div>
                    </Box>
                </Stack>
                <Stack className="card-box" >
                  {topProperties.length === 0 ? (
                    <Box className="empty-list" > Trends Empty </Box>
                  ) : (
                    <Swiper
                    className="top-property-swiper"
                    slidesPerView={"auto"}
                    spaceBetween={15}
                    navigation={{
                        nextEl : ".swiper-trend-next",
                        prevEl: ".swiper-trend-prev",
                    }}
                    pagination={{
                        el: ".swiper-trend-pagination",
                    }}
                    >
                      {topProperties.map((property, index) => {
                        return (
                            <SwiperSlide key={index} className="top-property-slide" >
                              <TopPropertyCard/>
                            </SwiperSlide>
                        )
                      })}  
                    </Swiper>
                  ) }
                </Stack>
            </Stack>
        </Stack>
    )
}

export default TopProperties