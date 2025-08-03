import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5 '>
            <div className='row mt-5 mb-5 text-center p-5'>
                <h1>Technology</h1>
                <h3 className='text-muted mt-3 fs-4'>Sleek, modern and intuitive trading plateforms</h3>
                <p className='text-muted mt-3 mb-5'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;