import * as React from 'react';

export default function RateButton() {
    return(
        <>
            {/* MUIのbuttonスタイルが適用されないためbootstrapのbuttonを使用 */}
            <button type="button" className="btn btn-outline-primary" style={{margin:"auto", display:"flex", padding:"10px 40px",fontSize:"1.4em"}}>換算</button>
        </>
    )
        
};