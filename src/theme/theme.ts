import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material/styles";
import React from "react";
import {
    amber,
    blue,
    cyan,
    deepOrange,
    green,
    lightBlue,
    lightGreen,
    pink,
    purple,
    red
} from "@mui/material/colors";


declare module "@mui/material/styles"{
    interface Palette{
        blueColor:PaletteColor;
        redColor:PaletteColor;
        greenColor:PaletteColor;
    }
    interface PaletteOptions{
        blueColor?:PaletteColorOptions;
        redColor?:PaletteColorOptions;
        greenColor?:PaletteColorOptions;
    }
}


export const theme=createTheme({
    typography:{
        fontFamily:'Noto sans JP, Roboto, "Helvetica Neue, Arial, sans-serif',
        fontWeightRegular:400,
        fontWeightMedium:500,
        fontWeightBold:700,
    },

    palette:{
        blueColor:{
            main: blue[500],
            light: blue[100],
            dark: blue[700],
            lighter:blue[50],
        },
        redColor:{
            main:red[500],
            light:red[100],
            dark:red[700],
        },
        greenColor:{
            main:green[500],
            light:green[100],
            dark:green[700],
        },
    },
    components: {
        MuiAutocomplete: {
          styleOverrides: {
            inputRoot: {
              '& .MuiInputBase-input': {
                width: '100% !important', // Override the width here
                placeholder:'nyuu',
              },
              '& .MuiInputLabel-root': { 
                transform: 'translate(5px, 5px) scale(0.9) !important' 
              },
            },
          },
        },
        MuiButton: {
            styleOverrides: {
              root: {
                '& .css-55zb43-MuiButtonBase-root-MuiButton-root': {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '16px',
                },
                // borderRadius: '8px',
                // textTransform: 'none',
                // fontSize: '16px',
              },
              contained: {
                '& .css-55zb43-MuiButtonBase-root-MuiButton-root': {
                    backgroundColor: blue[500],
                    color: 'black  !important',
                    '&:hover': {
                    backgroundColor: blue[700],
                },
                },
                
              },
            },
        },
    },
}

);

