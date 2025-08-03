import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

console.log('Hero is:', Hero);
console.log('Brokerage is:', Brokerage);

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        </>
     );
}

export default PricingPage;