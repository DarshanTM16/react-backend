import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import './Bollywood.css';
import data from './Data.json';

const Bollywood = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp8022670.png" 
         title="Bollywood" data={data[1]} route="/Bollywooddata"
         />
        </>
    )
}

export default Bollywood;