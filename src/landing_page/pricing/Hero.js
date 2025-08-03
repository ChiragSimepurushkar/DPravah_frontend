import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row border-bottom mt-3 p-5 text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted fs-5 mt-3'>Free equity investment and flat ₹20 traday and F&O traders</h3>
                </div>
            <div className='row mt-5 p-5 text-center'>
                <div className='col-4 p-5'>
                    <img src="media/images/pricingEquity.svg"/>
                    <h1 className='fs-2'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="media/images/intradayTrades.svg"/>
                    <h1 className='fs-2'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat Rs. 20 or 0.03%(whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. </p>
                </div>
                <div className='col-4 p-5'>
                    <img src="media/images/pricingEquity.svg"/>
                    <h1 className='fs-2'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.</p>
                </div>
            </div>
            </div>
     );
}

export default Hero;