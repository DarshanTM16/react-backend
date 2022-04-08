import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './Data.json';

const Fitness = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp10556298.jpg" 
         title="Fitness" data={data[3]} route="/fitdata"
         />
        </>
    )
};

export default Fitness;