import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDivicDetect";

import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";



const CS: NextPage = () => {
    
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack> CS MOBILE </Stack>
  }else {
    
    return(
        <div style={{margin: "20px 0"}} >
        <Stack className="container" >
       cs
        </Stack>
      </div>
    )
}
}

export default withLayoutBasic(CS)