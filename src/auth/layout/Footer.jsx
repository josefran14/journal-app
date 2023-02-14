import { Box, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.svg"

export const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
  return (
    <Box
      sx={{
        bgcolor: "#2C8E83",
        padding: "5px 20px",
        bottom: 0,
        height: "90px",
        position: "absolute",
        width: "100%",
      }}
    >
      <Stack direction= 'row' justifyContent= 'center' alignItems= 'center' sx={{mt: '20px'}}>
       <img src= {logo} alt="New England" width='120px' height='60px'/>
        <Stack>
          <Typography sx={{color: 'white', fontWeight: '700'}}>® {currentYear}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
