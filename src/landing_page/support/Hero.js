import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id="supporthero">
            <div className='p-5' id="supportWrapper">
                <h4 >Support Portal</h4>
                <a href="" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className='row p-3 mb-5 mx-5' id="color">
                <div className='col-1 p-5 mb-3'></div>
                <div className='col-6 p-5 mb-3'>
                    <h1 className='fs-3'>Search for answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O, why is order getting rejected..' className='mb-2 mt-2'/>
                    <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Intraday</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className='col-5 p-5 mb-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol type="1" style={{lineHeight:"2.5"}}>
                        <li><a href="">Current Takeovers and Delistings - January 2025</a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO </a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;