import React from 'react';
import './Home.css'
import heroImg from '../../assets/general/banner.png'
import arrow1 from '../../assets/icons/arrow short 1.png'
import arrow2 from '../../assets/icons/arrow short 2.png'
import bottle1 from '../../assets/general/card.png'
import fruit from '../../assets/general/card 2.png'
import arrow from '../../assets/icons/arrow 1.png'
import juice from '../../assets/general/juice.png'
import shakes from '../../assets/general/shakes.png'
import smoothies from '../../assets/general/smoothies.png'
import favourite from '../../assets/general/seasonal Favorites.png'

const Home = () => {
    return (

        <div className='hero-section '>
            <div className='hero-container'>
                <div className='carousel-btn'>
                    <img src={arrow2} alt='arrow-1' />
                    <img src={arrow1} alt='arrow-1' />
                </div>
                <div className='section-details'>
                    <p>ORIGINAL SMOOTHIES</p>
                    <h1 className='normal-case'>Make The Most Of Morning</h1>
                    <p>The quickest, easiest way to get in your fruits and veggies</p>
                    <div className='hero-link'>
                        <button className=' bg-white text-stone-900'>Learn More</button>
                        <button className=' btn-primary'>Shop Now</button>
                    </div>
                </div>
            </div>

            <div className='carousel-section'>
                <div className='carousel-container'>
                    <div className='carousel-inner'>
                        <div>
                        <span>SALE</span>
                        </div>
                        <img src={bottle1} alt="juice advertisement" />
                        <p className='carousel-text'>Ginger Grapefruit</p>
                        <p>$4.00 USD</p>
                    </div>
                    <div className='carousel-inner'>
                       <div>
                       <span>SALE</span>
                       </div>
                        <img src={fruit} alt="juice advertisement" />
                        <p className='carousel-text'>Grapefruit and Cinamon</p>
                        <p>$5.00 USD</p>
                    </div>
                    <div className='carousel-inner'>
                       <div>
                       <span>SOLD OUT</span>
                       </div>
                        <img src={bottle1} alt="juice advertisement" />
                        <p className='carousel-text'>Ginger Grapefruit</p>
                        <p>$4.00 USD</p>
                    </div>
                    <div className='carousel-inner'>
                        <div>
                        <img src={arrow} alt="small-arrow" />
                        </div>
                        <img src={bottle1} alt="juice advertisement" />
                        <p className='carousel-text'>Ginger Grapefruit</p>
                        <p>$4.00 USD</p>
                    </div>
                </div>
                <button>View all</button>
            </div>

            <div className='products-section'>
                <div className='product-details-1'>
                    <div className='juice-section'>
                        <img src={juice}/>
                    </div>
                    <div className='other-section'>
                        <div className='smoothies-section'>
                        <img src={smoothies}/> 
                        </div>
                        <div className='shakes-section'>
                        <img src={shakes}/>                         
                        </div>
                    </div>

                </div>
                <div className='product-details-2'>
                <img src={favourite}/>
                   
                </div>
            </div>
        </div>
    );
};

export default Home;