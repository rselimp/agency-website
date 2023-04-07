import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import image12 from '../../../../images/s8.jpg'

const Offer = () => {
    useEffect(() =>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,})
    },[])
    return (
        <div className=" dark:bg-gray-600 mb-10">
            <p className='text-center text-5xl font-bold mb-8  underline -mt-14'>Your Trust</p>
<div className="hero-content flex-col lg:flex-row justify-between">
  <img data-aos="fade-right" src={image12} className="rounded-lg shadow-2xl h-[300px]  w-[500px]"alt='' />
  <div data-aos="fade-left" className='ml-6 dark:text-white'>
    <h1 className="text-5xl font-bold text-blue-600 dark:text-white">Service You Can Trust Please</h1>
    <p className="py-6 text-xl">Protect All Your Home Appliances & Systems</p>
    
  </div>
</div>
</div> 
    );
};

export default Offer;