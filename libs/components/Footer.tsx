import { Box, Stack } from "@mui/material"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import TelegramIcon from "@mui/icons-material/Telegram"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import useDeviceDetect from "../hooks/useDivicDetect"


const Footer = () => {
  const device = useDeviceDetect();

  if(device == "mobile") {
      return <Stack className={"footer-container"} >FOOTER MOBILE</Stack> }
      else{
        return (
          <Stack className={"footer-container"} >
           <Stack className={"main"} >
            <Stack className={"left"} >
              <Box component={"div"} className={"footerBox"} >
                <img src="/img/logo/logoWhite.svg"  alt=""  className={"logo"} />  
              </Box>
              <Box component={"div"} className={"footerBox"} >
                <span>total free customer care</span>
                <p>+82 10 4867 2323</p> 
              </Box>
              <Box component={"div"} className={"footerBox"} >
                <span>nee live</span>
                <p>+82 10 4867 2323</p>
                <span>Support?</span> 
              </Box>
              <Box component={"div"} className={"footerBox"} >
                  <p>follow us on social media</p>
                   
                   <div className="media-box" >
                  <FacebookOutlinedIcon/>
                   <TelegramIcon/>
                   <InstagramIcon/>
                   <TwitterIcon/>   
                   </div>
                   
              </Box>
            </Stack>
            <Stack className="right" >
              <Box component={"div"} className="top"  >
                <strong> keep yourself up to date </strong>
                <div>
                  <input type="text"  placeholder="your Email" />
                  <span>Subscribe</span>
                </div>
              </Box>
              <Box component={"div"} className={"bottom"} >
                  <div>
                      <strong>Popular search</strong>
                      <span>Property for Rent</span>
                      <span>Property Low to hide</span>
                  </div>
                  <div>
                    <strong>Quick Links</strong>
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                    <span>Pricing Plans</span>
                    <span>Our Services</span>
                    <span>Contact Support</span>
                    <span>FAQs</span>
                  </div>
                  <div>
                      <strong>Discover</strong>
                      <span>Seoul</span>
                      <span>Gyeongido</span>
                      <span>Busan</span>
                      <span>Jejudo</span>
                  </div>
              </Box>
            </Stack>
           </Stack>
           <Stack className={"second"} >
             <span>Nestar - All right reserved. Nestar 2024</span>
             <span>Privacy  Terms SiteMap</span>
           </Stack>
          </Stack>
      )
      }
    // return (
    //     <Stack className={"footer-container"} >
    //      <Stack className={"main"} >
    //       <Stack className={"left"} >
    //         <Box component={"div"} className={"footerBox"} >
    //           <img src="/img/logo/logoWhite.svg"  alt=""  className={"logo"} />  
    //         </Box>
    //         <Box component={"div"} className={"footerBox"} >
    //           <span>total free customer care</span>
    //           <p>+82 10 4867 2323</p> 
    //         </Box>
    //         <Box component={"div"} className={"footerBox"} >
    //           <span>nee live</span>
    //           <p>+82 10 4867 2323</p>
    //           <span>Support?</span> 
    //         </Box>
    //         <Box component={"div"} className={"footerBox"} >
    //             <p>follow us on social media</p>
                 
    //              <div className="media-box" >
    //             <FacebookOutlinedIcon/>
    //              <TelegramIcon/>
    //              <InstagramIcon/>
    //              <TwitterIcon/>   
    //              </div>
                 
    //         </Box>
    //       </Stack>
    //       <Stack className="right" >
    //         <Box component={"div"} className="top"  >
    //           <strong> keep yourself up to date </strong>
    //           <div>
    //             <input type="text"  placeholder="your Email" />
    //             <span>Subscribe</span>
    //           </div>
    //         </Box>
    //         <Box component={"div"} className={"bottom"} >
    //             <div>
    //                 <strong>Popular search</strong>
    //                 <span>Property for Rent</span>
    //                 <span>Property Low to hide</span>
    //             </div>
    //             <div>
    //               <strong>Quick Links</strong>
    //               <span>Terms of Use</span>
    //               <span>Privacy Policy</span>
    //               <span>Pricing Plans</span>
    //               <span>Our Services</span>
    //               <span>Contact Support</span>
    //               <span>FAQs</span>
    //             </div>
    //             <div>
    //                 <strong>Discover</strong>
    //                 <span>Seoul</span>
    //                 <span>Gyeongido</span>
    //                 <span>Busan</span>
    //                 <span>Jejudo</span>
    //             </div>
    //         </Box>
    //       </Stack>
    //      </Stack>
    //      <Stack className={"second"} >
    //        <span>Nestar - All right reserved. Nestar 2024</span>
    //        <span>Privacy  Terms SiteMap</span>
    //      </Stack>
    //     </Stack>
    // )
}

export default Footer