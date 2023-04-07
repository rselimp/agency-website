import React, { Component } from 'react';
import image1 from '../../../../images/basilica_of_the_sacred_heart,_paris.jpg'
import image2 from '../../../../images/collosseum.jpg'
import image3 from '../../../../images/taj_mahal.jpg'
import image4 from '../../../../images/the_great_wall.jpg'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class PauseOnHover extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        infinite: true,
                        dots: true,
                    }
                }
            ]
        };
        return (
            <div className="mt-8">
                
                <Slider {...settings}>


                 
                  <div className="hero bg-sky-100 gap-4 py-6">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image1} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div className="">
                                <h1 className="text-4xl font-bold">Project Name B</h1>
                                <p className="text-xl font-bold">Specialist</p>
                                <p className="py-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-base-200 py-6">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image2} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Project Name A</h1>
                                <p className="text-xl font-bold">Project</p>
                                <p className="py-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                               
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-sky-100 mr-2 py-6">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image3} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Project Name YZ</h1>
                                <p className="text-xl font-bold">Engineering</p>
                                <p className="py-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-base-200 mr-4 py-6">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image4} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Project Name Y</h1>
                                <p className="text-xl font-bold">Technical</p>
                                <p className="py-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-sky-100 mr-4 py-6">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image3} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Project Name C</h1>
                                <p className="text-xl font-bold">Specialist</p>
                                <p className="py-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="hero bg-base-200 mr-4 py-6">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image2} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Project Name D</h1>
                                <p className="text-xl font-bold">Specialist</p>
                                <p className="py-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                
                            </div>
                        </div>
                    </div>

                

                       


                </Slider>
            </div>
        );
    }
}