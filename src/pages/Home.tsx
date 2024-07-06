import { Box, Typography } from "@mui/material";
import React from "react";
import CountrySelect from "../components/CountrySelect";
import RateButton from "../components/RateButton";

const Home=()=>{
    return(
        <Box sx={{padding:"50px"}}>
            <CountrySelect/>
            <RateButton/>
        </Box>
    );
}

export default Home;