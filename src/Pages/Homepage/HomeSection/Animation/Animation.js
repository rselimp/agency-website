import React from 'react';
import './Animation.css'
import image1 from '../../../../images/s1.jpg'
import image2 from '../../../../images/s2.jpg'
import image3 from '../../../../images/s3.jpg'
import image4 from '../../../../images/s4.jpg'
import image5 from '../../../../images/s5.jpg'
import image6 from '../../../../images/s6.jpg'
import image7 from '../../../../images/s7.jpg'
import image8 from '../../../../images/s8.jpg'






const Animation = () => {
    
   
    return (
      
<div className='head'>
<div className='slider'>
    <span style={{"--i":"1"}}><img src={image1} alt="" /></span>

    <span style={{"--i":"2"}}><img src={image2} alt="" /></span>
    <span style={{"--i":"3"}}><img src={image3} alt="" /></span>
    <span style={{"--i":"4"}}><img src={image4} alt="" /></span>
    <span style={{"--i":"5"}}><img src={image5} alt="" /></span>
    <span style={{"--i":"6"}}><img src={image6} alt="" /></span>
    <span style={{"--i":"7"}}><img src={image7} alt="" /></span>
    <span style={{"--i":"8"}}><img src={image8} alt="" /></span>
   
    

</div>
</div>
    )
}
export default Animation;