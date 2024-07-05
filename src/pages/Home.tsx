import { Box, Typography } from "@mui/material";
import React from "react";
import CountrySelect from "../components/CountrySelect";

const Home=()=>{
    return(
        <Box sx={{padding:"50px"}}>
            <CountrySelect/>
        </Box>
    );
}

export default Home;