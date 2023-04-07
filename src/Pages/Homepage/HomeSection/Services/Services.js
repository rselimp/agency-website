import React from 'react';
import userimage from '../../../../images/im1.jpg'
import image2 from '../../../../images/download.png'
import image3 from '../../../../images/im3.png'
import image4 from '../../../../images/im4.jpg'
import image5 from '../../../../images/im6.jpg'
import image6 from '../../../../images/im5.jpg'


import Service from './Service';

const Services = () => {

    const serviceData =[
        
            {
                id: 1,
                name: 'Service 1',
                description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
                img: userimage,
            },
            {
                id: 2,
                name: 'Service 2',
                description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
                img:image2,
            },
            {
                id: 3,
                name: 'Service 3',
                description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
                img:image3
            },
            {
                id: 4,
                name: 'Service 4',
                description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
                img:image4
            },
            {
                id: 5,
                name: 'Service 5',
                description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
                img:image5,
            },
            {
                id: 6,
                name: 'Service 6',
                description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
                img:image6,
            }
        
    ]

    return (
        <div className='mt-10'>
        <div className='text-center mb-14'>
            <h4 className='text-accent uppercase mb-4 font-bold underline underline-offset-8'>Services</h4>
            <h1 className='text-5xl font-bold'>Excellent Agency <br /> Services</h1>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-0 lg:ml-0 ml-7'>
            {
                serviceData.map(service => <Service key={service.id} service={service}/>)
            }
        </div>
    </div>
    );
};

export default Services;