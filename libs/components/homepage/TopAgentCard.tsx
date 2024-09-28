import React from "react"
import { Box, Divider, Stack, Typography } from "@mui/material"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import FavoriteIcon from "@mui/icons-material/Favorite"
import IconButton from "@mui/material/IconButton"



const TopAgentCard = () => {
    return (
        <Stack className={"top-card-box"} >
          
          <Box
          className="card-img"
          style={{
            backgroundImage: `url("/img/profile/girl.svg")`
          }}>
           
          </Box>
          
            <Box>
               <span style={{fontSize:"20px bold"}} >Martin</span>
               <p  style={{marginTop:"10px"}} >Agent</p>
            </Box>
           
          
          
          
         
        </Stack>
    )
}

export default TopAgentCard;