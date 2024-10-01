import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import {  ArrowBackIos, ArrowForwardIos, KeyboardArrowDownRounded } from "@mui/icons-material";
import { Box, Button, Container, Pagination, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"
import PropertyCard from "@/libs/components/property/PropertyCard";
import Filter from "@/libs/components/property/Filter";
import useDeviceDetect from "@/libs/hooks/useDivicDetect";



const PropertyList:NextPage = () => {
    const device = useDeviceDetect();
    const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5])
    const [currentPage, setCurrentPage] = useState(1); 
    
    

  if (device === "mobile") {
    return <Stack> PROPERTYLIST MOBILE </Stack>
  }else {
    
    return (
      <div id="property-list-page" >
        <Stack className="container" >
          <Box className="right" >
            <span>Sort by</span>
            <div>
              <Button endIcon={<KeyboardArrowDownRoundedIcon/>} >New</Button>
            </div>
          </Box>
          <Stack className="property-page" >
          <Stack  className="filter-container" >
            <Filter/>
          </Stack>
          <Stack className="card-box" >
            <Stack className="card-box-pagination" >
              {properties.map((property, index) => {
            return <PropertyCard key={index} />
          })}
            </Stack>
           <Stack className="pagination" >
              <Pagination
              page={1}
              count={5}
              shape="circular"
              color="primary"/>
           </Stack>
            </Stack>
            
           

          </Stack>
        </Stack>
      </div>
      
    )
}
}

export default withLayoutBasic(PropertyList) 