import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <h1 className='text-center'>People</h1>
            </div>
            <div className='row p-3 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-3 text-center'>
                    <img src="media/images/chirag.png" style={{borderRadius:"100%",width:"45%"}}/>
                    <h4 className='mt-5'>Chirag Nikant Simepurushkar</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-6 p-3'>
                    <p>Chirag Simepurushkar bootstrapped and founded DPravah in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, DPravah has changed the landscape of the Indian broking industry.</p><p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p><p> Playing Cricket is his zen.</p><p> Connect <a href="" style={{textDecoration:"none"}}>onHomepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>LinkedIn </a>
                    </p>

                </div>
            </div>
        </div>
     );
}

export default Team;