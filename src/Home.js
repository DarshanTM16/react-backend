import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import data from './Data.json';
// import Blogdata from './Blogdata';
import Bollywoodata from './Bollywooddata';


const Home = () => {
    return(
        <>
         <Navbar />
         <Hero data={data} />
         <Footer data={data} />
        </>
    )
}

export default Home;