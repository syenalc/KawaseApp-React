import * as React from 'react';
import { useState,useEffect,useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../context/CurrencyContext';

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

interface CountryType {
    code: string;
    label: string;
    currency: string;
    // suggested?: boolean;
}

interface RateButtonProps{
    // val1: CountryType | null;
    // val2: CountryType | null;
    // // linkDisabled:boolean;
    // // setLinkDisable:React.Dispatch<React.SetStateAction<boolean>>;
    parsedTrigger:boolean;

}
export default function RateButton({parsedTrigger}:RateButtonProps) {
    const currencyContext2 = useContext(CurrencyContext);

    if (!currencyContext2) {
        throw new Error('CurrencySelect must be used within a CurrencyProvider');
    }

    const {val1, val2,from,to,rate,setFrom,setTo,setRate} = currencyContext2;

    
    const [amount, setAmount] = useState<string>('1');
    const [trigger, setTrigger] = useState(parsedTrigger);

    useEffect(() => {
        if (from && to) {
            const fetchData = async () => {
                const endpoint = 'convert';
                const keeys = "fee6feb01162d3fe5c84d5ac41a290d5";
                const url = `https://api.exchangerate.host/${endpoint}?access_key=${keeys}&from=${from}&to=${to}&amount=${amount}`;

                try {
                    const res = await fetch(url, {
                        method: "GET",
                    });
                    if (!res.ok) {
                        throw new Error(`エラーが発生しました。ステータス:${res.status}`);
                    }
                    const data: CurrencyData = await res.json();
                    setRate(data.result);
                    console.log(data);
                    
                    // setLinkDisable(false);
                } catch (e) {
                    console.log('エラーが発生しました', e);
                }
            };

            fetchData();
        }
    }, [from, to, amount]);

    const getCurrencyRate = () => {
        if (val1 && val2) {
            setFrom(val1.currency);
            setTo(val2.currency);
            // setLinkDisable(false);
            
            // triggerの値をトグル（true <-> false）させる
            setTrigger((prev) => !prev);
            console.log("通貨換算リクエストを送信")
        } else {
            console.log('val1またはval2がnullです');
        }
        
    };

    // useEffect(() => {
    //     //val1,2はオブジェクト型なので一旦sting型へ変更
    //     if (val1) localStorage.setItem('val1', JSON.stringify(val1));
    //     if (val2) localStorage.setItem('val2', JSON.stringify(val2));
    //     const savedVal = localStorage.getItem('val1');
    //     const savedVal2 = localStorage.getItem('val2');
        
    //     //triggerを変更したら、その値を保存する
    //     localStorage.setItem('trigger', trigger.toString());
    //     // if (val1)  console.log(val1.currency);
    //     // if (val2) console.log(val2.currency);
    //     // console.log(rate);
    //     if (val1) localStorage.setItem('currency1', JSON.stringify(val1.currency));
    //     if (val2) localStorage.setItem('currency2', JSON.stringify(val2.currency));
    //     // console.log(savedVal);
    //     // console.log(savedVal2);
    //     // console.log(parsedTrigger);//再レンダリングされたときに代わる
    //     console.log(trigger);//getCurrencyRate押したときに代わる
    // }, [trigger]);
    const dataStorage=()=>{
        if (from) localStorage.setItem('from', JSON.stringify(from));
        if (to) localStorage.setItem('to', JSON.stringify(to));
        if (rate) localStorage.setItem('rate', JSON.stringify(rate));
        console.log(from,to,rate)
    }
    return(
        <>
            {/* MUIのbuttonスタイルが適用されないためbootstrapのbuttonを使用 */}
            <button onClick={getCurrencyRate} type="button" className="btn btn-outline-primary" style={{margin:"auto", display:"flex", padding:"10px 40px",fontSize:"1.4em"}}>換算</button>
            {rate !== null && <Box sx={{marginTop:"40px"}}>
            <Card sx={{ minWidth: 275, maxWidth: 500, margin:"auto", padding:"20px" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }}  color="text.secondary" gutterBottom>
                        <p style={{textAlign:"center"}}><span style={{color:"grey"}}>1{from}は </span><span style={{fontSize:"1.8em",color:"#007bff"}}>{rate}</span> <span style={{color:"grey"}}>{to}</span></p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={dataStorage}><Link to="report"><span style={{color:"#007bff",textDecoration:"underline",cursor:"pointer"}}>詳しく見る</span></Link></Button>
                </CardActions>
            </Card>
            </Box>
            }
        </>
    )
        
};