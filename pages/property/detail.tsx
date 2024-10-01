import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDivicDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";



const PropertyDetail: NextPage = () => {
    
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack> PROPERTY DETAIL MOBILE </Stack>
  }else {
    return (
        <>
          
          <Container>PROPERTY DETAIL</Container>
         
        </>
    )
}
}

export default withLayoutBasic(PropertyDetail)