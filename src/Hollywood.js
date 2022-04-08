import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './Data.json';

const Hollywood = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/uwp/uwp1829324.jpeg" 
         title="Hollywood" data={data[2]} route="/hollydata"
         />
        </>
    )
};

export default Hollywood;