import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = (props) => {
    let data = props.data[0];
    return (
        <>
            <div className="hero">
                <div className="left">
                    <Link to="/hollydata" className='blink'>
                        <img src='https://wallpapercave.com/uwp/uwp2063838.jpeg' alt="" height="100%" width="100%" />
                    </Link>
                    <div className="text">{data.mheading} <br />
                        <p className="timeline">{data.type}{data.timeline} </p>
                    </div>
                </div>
                <div className="right-top">
                    <Link to="/traveldata" className='blink'>
                        <img src='https://wallpapercave.com/dwp1x/wp2177933.jpg' alt="" height="100%" width="100%" />
                    </Link>
                </div>
                <div className="right-bottom">
                    <Link to="/traveldata" className='blink'>
                        <img src='https://wallpapercave.com/wp/wp8999284.jpg' alt="" height="100%" width="100%" />
                    </Link>
                </div>
            </div>

            <div className="the-latest">
                The Latest
                <div className="border-bottom"></div>
            </div>

            <div className="article">
                <div className="a1 a">
                    <Link to="/traveldata" className='blink'>
                        <img src="https://wallpapercave.com/dwp1x/kI52UN6.jpg" alt="" height="55%" width="100%" />
                        <div className="a-info">
                            <h4>Explore wonders of world </h4>
                            <p>{data.trdata} </p>

                            <p><b>{data.type}</b>{data.timeline}</p>
                        </div>
                    </Link>
                </div>
                <div className="a2 a">
                    <Link to="/hollydata" className='blink'>
                        <img src="https://wallpapercave.com/wp/wp10420140.jpg" alt="" height="55%" width="100%" />
                        <div className="a-info">
                            <h4>Spider-Man:No Way Home review</h4>
                            <p>{data.hdata}</p>

                            <p><b>Hollywood</b>{data.timeline}</p>
                        </div>
                    </Link>
                </div>
                <div className="a3 a">
                    <Link to="/techdata" className='blink'>
                        <img src="https://wallpapercave.com/wp/j8wLd85.jpg" alt="" height="55%" width="100%" />
                        <div className="a-info">
                            <h4>Check out the latest tech news</h4>
                            <p>{data.tdata}</p>

                            <p><b>Technology</b>{data.timeline}</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="latest-articles">
                Latest Articles
                <div className="border-bottom"></div>
            </div>

            <div className="article-2">
                <div className="latest-1 latest">
                    <Link to="/bollywoodata" className='blink homelink'>
                        <img src="https://wallpapercave.com/wp/wp8022670.png" alt="" height="70%" width="50%" />
                        <div className="art-1 art">
                            <h4>Bahubali 2 review</h4>
                            <p>{data.bdata} </p>
                            <br />
                            <span>Bollywood</span>{data.timeline}
                        </div>
                    </Link>
                </div>

                <div className="latest-2 latest">
                    <Link to="/techdata" className='blink homelink'>
                        <img src='https://wallpapercave.com/wp/j8wLd85.jpg' alt="" height="70%" width="50%" />
                        <div className="art-2 art">
                            <h4>Check out the latest tech news</h4>
                            <p>{data.tdata}</p>
                            <br />
                            <p><span>Technology</span>{data.timeline}</p>
                        </div>
                    </Link>
                </div>
                <div className="latest-3 latest">
                    <Link to="/fitdata" className='blink homelink'>
                        <img src='https://wallpapercave.com/dwp1x/wp10556298.jpg' alt="" height="70%" width="50%" />
                        <div className="art-3 art">
                            <h4>Importance of physical fitness</h4>
                            <p>{data.fdata}</p>
                            <br />
                            <p><span>Fitness</span>{data.timeline}</p>
                        </div>
                    </Link>
                </div>
                <div className="latest-4 latest">
                    <Link to="/traveldata" className='blink homelink'>
                        <img src='https://wallpapercave.com/wp/wp1921785.jpg' alt="" height="70%" width="50%" />
                        <div className="art-4 art">
                            <h4>Explore wonders of world</h4>
                            <p>{data.trdata}</p>
                            <br />
                            <p><span>Travel</span>{data.timeline}</p>
                        </div>
                    </Link>
                </div>
                <div className="advertisement">
                    Advertisement
                </div>
            </div>

            <div className="load-more"><span className="arrow"><i class="fas fa-arrow-down"></i></span>LOAD MORE</div>
        </>
    )
}

export default Hero;