import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row '>
                <div className='col-6 '>
                    <img src={imageURL}/>
                </div>
                <div className='col p-5 mt-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                    <a href={learnMore} style={{textDecoration:"none",marginLeft:"50px"}}>learnMore<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"25px"}}><img src="media/images/appstoreBadge.svg"/><img src=""/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;