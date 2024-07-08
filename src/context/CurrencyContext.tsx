import React, { useState, createContext, ReactNode , Dispatch, SetStateAction, useEffect } from "react";

interface CountryType {
    code: string;
    label: string;
    currency: string;
  }
  
interface CurrencyData {
    success: boolean;
    query: {
        from: string;
        to: string;
        amount: number;
    };
    info: {
        rate: number;
    };
    result: number;
}
interface CurrencyContextProps {
    val1: CountryType | null;
    val2: CountryType | null;
    setVal1: Dispatch<SetStateAction<CountryType | null>>;
    setVal2: Dispatch<SetStateAction<CountryType | null>>;
    from: string |null ;
    to: string |null ;
    rate:number |null;
    setFrom: Dispatch<SetStateAction<string | null>> ;
    setTo: Dispatch<SetStateAction<string | null>> ;
    setRate: Dispatch<SetStateAction<number | null>> ;
    
}


export const CurrencyContext=createContext<CurrencyContextProps | undefined>(undefined);


export const CurrencyProvider:React.FC<{children:ReactNode}>=({children})=>{
    
    // const defaultCurrency1= localStorage.getItem('val1') ? JSON.parse(localStorage.getItem('val1')): {code: 'US',label: 'ドル',currency: 'USD'}
    // const defaultCurrency2= localStorage.getItem('val2') ? localStorage.getItem('val2'): { code: 'JP',label: '円',currency: 'JPY'}
    
    const [val1,setVal1]=useState<any>(null);
    const [val2,setVal2]=useState<any>(null);
    let [rate, setRate] = useState<number | null>(null);
    let [from, setFrom] = useState<string | null>(null);
    let [to, setTo] = useState<string | null>(null);

    
    return(
        <CurrencyContext.Provider value={{val1,val2,setVal1,setVal2,rate,from,to,setRate,setFrom,setTo}}>
            {children}
        </CurrencyContext.Provider>
    );
};