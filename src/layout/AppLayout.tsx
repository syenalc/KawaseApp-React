import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { theme } from '../theme/theme';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
// bgcolor:(theme)=>theme.palette.expenseColor.main,
//                     color:"white",borderRadius:"10px",flexGrow:1}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" >
      <Box sx={{display:"flex",justifyContent:"space-between", alignItems:"center", bgcolor:(theme)=>theme.palette.blueColor.main, minHeight:"10vh",padding:"20px"}}>
        <Typography 
            sx={{textAlign:"left",fontSize:"44px", color:(theme)=>theme.palette.blueColor.light}} variant="h1" 
            fontWeight={"fontWeightRegular"}
        >為替速報</Typography>
        <Breadcrumbs aria-label="breadcrumb" sx={{textAlign:"right"}}>
         <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
         >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
         </Link>
         <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        //   href="/material-ui/getting-started/installation/"
          href="report"
         >
          <BarChartIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Report
         </Link>
        {/* <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography> */}
        </Breadcrumbs>
      </Box>
     
      <Outlet/>
    </div>
  );
}