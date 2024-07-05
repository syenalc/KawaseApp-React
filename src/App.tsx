
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import {Route,BrowserRouter as Router,  Routes} from 'react-router-dom';
import { theme } from "./theme/theme";
import Home from "./pages/Home";
import Report from "./pages/Report";
import NoMatch from "./pages/NoMatch";
import IconBreadcrumbs from "./layout/AppLayout";

const App=()=>{
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Routes>
                    <Route path="/" element={<IconBreadcrumbs/>}>
                        <Route index element={
                            <Home/>
                        }>
                        </Route>
                        <Route path="report" element={
                            <Report/>
                        }>
                            
                        </Route>
                        <Route path="*" element={
                            <NoMatch/>
                        }>
                            
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App;