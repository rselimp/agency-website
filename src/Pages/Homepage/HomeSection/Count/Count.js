import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import image1 from '../../../../images/pngtree-travel-agency-logo-design-vector-png-image_3996962.png'
import image2 from '../../../../images/attachment_33325151.png'
import image3 from '../../../../images/attachment_33325151.png'
const Count = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={() =>setCounterOn(false)}>
       <div className='mt-10'>
        <p className='text-center text-5xl font-bold'>Total Projects and Client</p>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10'>
            
            <div className="card w-96 bg-sky-100 shadow-xl dark:bg-gray-700">
                <figure className="px-10 pt-10">
                    <img  src={image1} alt="Shoes" className="rounded-xl h-40 w-40 dark:bg-white" />
                </figure>
                <div className="card-body items-center text-center dark:text-white">
                    <h2 className="card-title text-6xl">Clients</h2>
                    <p className='text-5xl'>{ counterOn && <CountUp start={800} end={999} duration={5} delay={0}></CountUp>}</p>
                    
                </div>
            </div>
            <div className="card w-96 bg-sky-100 shadow-xl dark:bg-gray-700">
                <figure className="px-10 pt-10">
                    <img src={image2} alt="Shoes" className="rounded-xl h-40 w-40 dark:bg-white" />
                </figure>
                <div className="card-body items-center text-center dark:text-white">
                    <h2 className="card-title text-6xl">Branches</h2>
                    <p className='text-5xl'>{ counterOn && <CountUp start={400} end={499} duration={5} delay={0}></CountUp>}</p>
                    
                </div>
            </div>
            <div className="card w-96 bg-sky-100 shadow-xl dark:bg-gray-700">
                <figure className="px-10 pt-10">
                    <img src={image3} alt="Shoes" className="rounded-xl h-40 w-40 dark:bg-white" />
                </figure>
                <div className="card-body items-center text-center dark:text-white">
                    <h2 className="card-title text-6xl">Projects</h2>
                    <p className='text-5xl'>{ counterOn && <CountUp start={900} end={1000} duration={5} delay={0}></CountUp>}</p>
                   
                </div>
            </div>
         
        </div>
       </div>
      </ScrollTrigger>
    );
};

export default Count;