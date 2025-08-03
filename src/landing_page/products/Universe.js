import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
        <div className='container mt-3'>
            <div className='row text-center mt-3'>
                <h1 className='mt-4'>The Dhan Pravah Unvierse</h1>
                <p>Extended your trading and investment experience even further with our partner platform</p>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/smallcaseLogo.png"/>
                        <p className='text-small text-muted'>Thematic investment platform</p>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/streakLogo.png" style={{width:"40%"}}/>
                        <p className='text-small text-muted'>Algo & strategy platform</p>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/sensibullLogo.svg"style={{width:"60%"}}/>
                        <p className='text-small text-muted mt-2'>Options trading platform</p>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/zerodhaFundhouse.png"style={{width:"50%"}}/>
                        <p className='text-small text-muted'>Asset management</p>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/goldenpiLogo.png"style={{width:"50%"}}/>
                        <p className='text-small text-muted'>Bonds trading platform</p>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/dittoLogo.png"style={{width:"30%"}}/>
                        <p className='text-small text-muted mt-2'>Insurance</p>
                    </div>
                    <Link>
                    <button className='btn btn-primary mt-3 fs-5 p-2 mb-5'style={{margin:"0 auto",width:"20%"}}>
                        Sign up now
                    </button>
                    </Link>
            </div>
        </div>
     );
}

export default Universe;