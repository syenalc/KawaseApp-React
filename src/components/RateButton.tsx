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
}

interface RateButtonProps{
    parsedTrigger:boolean;

}
export default function RateButton({parsedTrigger}:RateButtonProps) {
    const currencyContext2 = useContext(CurrencyContext);

    if (!currencyContext2) {
        throw new Error('CurrencySelect must be used within a CurrencyProvider');
    }

    const {val1, val2,from,to,rate,setFrom,setTo,setRate,setRate1,setRate2,setRate3,setRate4} = currencyContext2;

    
    const [amount, setAmount] = useState<string>('1');
    const [trigger, setTrigger] = useState(parsedTrigger);

    useEffect(() => {
        if (from && to) {
            const fetchData = async () => {
                const endpoint = process.env.REACT_APP_API_END;
                const keeys = process.env.REACT_APP_API_KEY;
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

    

    const dataStorage=()=>{
        //from,to,rateをストレージに保存する
        if (from) localStorage.setItem('from', JSON.stringify(from));
        if (to) localStorage.setItem('to', JSON.stringify(to));
        if (rate) localStorage.setItem('rate', JSON.stringify(rate));
        console.log(from,to,rate)

        //今日の日付を取得
        const today = new Date();
        // 1週間前の日付を計算
        const oneWeekAgo = new Date(today);

        
        oneWeekAgo.setDate(today.getDate() - 7);
        // console.log(oneWeekAgo.setDate(today.getDate() - 7));
        // 2週間前の日付を計算
        const twoWeekAgo = new Date(today);
        // console.log(twoWeekAgo);
        // console.log(oneWeekAgo.setDate(today.getDate() - 14));
        twoWeekAgo.setDate(today.getDate() - 14);
        // 3週間前の日付を計算
        const threeWeekAgo = new Date(today);
        threeWeekAgo.setDate(today.getDate() - 21);
        // 4週間前の日付を計算
        const fourWeekAgo = new Date(today);
        fourWeekAgo.setDate(today.getDate() - 28);
    
    
        //取得した日付のフォーマットを変更する関数
        const formatdate=(adddate:Date)=>{
            return (adddate.toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            })
                .split("/")
                .join("-")
            );
        }

        const formattedToday = formatdate(today);
        // console.log(formattedToday);
        const formattedOneWeekAgo = formatdate(oneWeekAgo);
        const formattedTwoWeekAgo = formatdate(twoWeekAgo);
        const formattedThreeWeekAgo = formatdate(threeWeekAgo);
        const formattedFourWeekAgo = formatdate(fourWeekAgo);
        // console.log(formattedOneWeekAgo);
        // console.log(formattedTwoWeekAgo);
        // console.log(formattedThreeWeekAgo);
        // console.log(formattedFourWeekAgo);

        const fetchData1wago = async () => {
            const endpoint = process.env.REACT_APP_API_END;
            const keeys = process.env.REACT_APP_API_KEY;
            const url = `https://api.exchangerate.host/${endpoint}?access_key=${keeys}&from=${from}&to=${to}&amount=${amount}&date=${formattedOneWeekAgo}`;

            try {
                const res = await fetch(url, {
                    method: "GET",
                });
                if (!res.ok) {
                    throw new Error(`エラーが発生しました。ステータス:${res.status}`);
                }
                const data1: CurrencyData = await res.json();
                setRate1(data1.result);
                console.log(data1);

            } catch (e) {
                console.log('エラーが発生しました', e);
            }
        };
        fetchData1wago();

        const fetchData2wago = async () => {
            const endpoint = process.env.REACT_APP_API_END;
            const keeys = process.env.REACT_APP_API_KEY;
            const url = `https://api.exchangerate.host/${endpoint}?access_key=${keeys}&from=${from}&to=${to}&amount=${amount}&date=${formattedTwoWeekAgo}`;

            try {
                const res = await fetch(url, {
                    method: "GET",
                });
                if (!res.ok) {
                    throw new Error(`エラーが発生しました。ステータス:${res.status}`);
                }
                const data2: CurrencyData = await res.json();
                setRate2(data2.result);
                console.log(data2);
                
                // setLinkDisable(false);
            } catch (e) {
                console.log('エラーが発生しました', e);
            }
        };
        fetchData2wago();

        const fetchData3wago = async () => {
            const endpoint = process.env.REACT_APP_API_END;
            const keeys = process.env.REACT_APP_API_KEY;
            const url = `https://api.exchangerate.host/${endpoint}?access_key=${keeys}&from=${from}&to=${to}&amount=${amount}&date=${formattedThreeWeekAgo}`;

            try {
                const res = await fetch(url, {
                    method: "GET",
                });
                if (!res.ok) {
                    throw new Error(`エラーが発生しました。ステータス:${res.status}`);
                }
                const data3: CurrencyData = await res.json();
                setRate3(data3.result);
                console.log(data3);
                

            } catch (e) {
                console.log('エラーが発生しました', e);
            }
        };
        fetchData3wago();

        const fetchData4wago = async () => {
            const endpoint = process.env.REACT_APP_API_END;
            const keeys = process.env.REACT_APP_API_KEY;
            const url = `https://api.exchangerate.host/${endpoint}?access_key=${keeys}&from=${from}&to=${to}&amount=${amount}&date=${formattedFourWeekAgo}`;

            try {
                const res = await fetch(url, {
                    method: "GET",
                });
                if (!res.ok) {
                    throw new Error(`エラーが発生しました。ステータス:${res.status}`);
                }
                const data4: CurrencyData = await res.json();
                setRate4(data4.result);;
                console.log(data4);
                

            } catch (e) {
                console.log('エラーが発生しました', e);
            }
        };

        fetchData4wago();

        

        
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