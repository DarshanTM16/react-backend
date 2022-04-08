import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './Data.json';

const Travel = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/dwp1x/wp6510008.jpg" 
         title="Travel" data={data[5]} route="/traveldata"
         />
        </>
    )
};

export default Travel;