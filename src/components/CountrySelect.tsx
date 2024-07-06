import * as React from 'react';
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Button, Fab, ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';

interface CountryType {
  code: string;
  label: string;
  // phone?: string;
}

export default function CountrySelect() {
  const [val1,setVal1]=useState<CountryType | null>(null);
  const [val2,setVal2]=useState<CountryType | null>(null);

  const onChangeleft=(event:any,newValue:CountryType | null)=> setVal1(newValue);
  const onChangeright=(event:any,newValue:CountryType | null)=> setVal2(newValue);


  const exchangeCurrency = () => {
    if (val1 && val2) {
      // Swap labels between val1 and val2
      console.log(val1);
      const newLabel1= val2;
      const newLabel2 = val1;
      setVal1(newLabel1);
      setVal2(newLabel2);

    }
    
  }
  //下記はなくても動く
  // useEffect(() => {
  //   console.log("val1:", val1);
  //   console.log("val2:", val2);
  // }, [val1, val2]);
  
  
  return (
    <>
     <ThemeProvider theme={theme}>
      <Box display={"flex"} justifyContent={"space-evenly"} sx={{marginBottom:"30px"}}>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 400 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={onChangeleft}// Update val1 on option select
          value={val1}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code})
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="換算元通貨"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
                placeholder: '入力してください', // Add the placeholder here
              }}
              sx={{ '& .MuiInputBase-input': { width: 100 } }}
              value={val1 ? val1.label : ''} // Display the label of the selected option
              // value={val1}
              // onChange={(e)=>setVal1(e.target.value)}
           />
           )}
          />
        <Fab color="primary" aria-label="add">
          <SyncAltIcon onClick={exchangeCurrency}/>
        </Fab>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 400 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={onChangeright} // Update val2 on option select
          value={val2}
          renderOption={(props, option) => {
           const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                  
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              sx={{ '.MuiAutocomplete-input': { width: "auto" }, '& .css-1k5x6e8-MuiAutocomplete-root': { width: "auto" }}}
              {...params}
              label="換算先通貨"
              inputProps={{
                ...params.inputProps,
                // autoComplete: 'new-password', // disable autocomplete and autofill
                placeholder: '入力してください', // Add the placeholder here
              }}
              value={val2 ? val2.label : ''} // Display the label of the selected option
              // value={val2}
              // onChange={(e)=>setVal2(e.target.value)}
            />
        )}
        />
      </Box>
      
      {/* <button style={{borderRadius:"5px",backgroundColor:"blue", border:"none", margin:"auto", display:"flex", padding:"10px 40px",fontSize:"1.4em"}}>換算する</button> */}
      {/* <Button 
        variant="contained" 
        sx={{ 
          backgroundColor: theme.palette.blueColor.main, 
          color: 'white', 
          '&:hover': { backgroundColor: theme.palette.blueColor.dark } 
        }}
      >
        Contained
      </Button> */}
     </ThemeProvider>
    </>
    
    
  );
}

interface CountryType {
  code: string;
  label: string;
  phone?: string;
  suggested?: boolean;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
  {
    code: 'AE',
    label: 'UAEディルハム',
    // phone: '971',
  },
  { code: 'AR', label: 'アルゼンチンペソ' },
  {
    code: 'AU',
    label: 'オーストラリアドル',
    // phone: '61',
  },
  { code: 'BR', label: 'レアル' },
  {
    code: 'CA',
    label: 'カナダドル',
    // phone: '1',
  },
  { code: 'CN', label: '元', phone: '86' },
  { code: 'CO', label: 'コロンビアペソ', phone: '57' },
  {
    code: 'DE',
    label: 'ユーロ',
    // phone: '49',
  },
  { code: 'GB', label: 'ポンド' },
  { code: 'ID', label: 'ルピア' },
  { code: 'IN', label: 'ルピー'},
  {
    code: 'JP',
    label: '円',
    // phone: '81',
    // suggested: true,
  },
  { code: 'KR', label: 'ウォン'},
  { code: 'MX', label: 'メキシコペソ'},
  { code: 'PH', label: 'フィリピンペソ'},
  { code: 'TH', label: 'バーツ' },
  { code: 'TR', label: 'リラ' },
  {
    code: 'US',
    label: 'ドル',
  },

  { code: 'VN', label: 'ドン'},
  { code: 'ZA', label: 'ランド'},
];