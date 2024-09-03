import React from 'react'
import Image1 from '../asset/251C_Flyer-01.png'
import Image2 from '../asset/251C_Flyer-02.png'
import Image3 from '../asset/251C_Flyer-03.png'
import Image4 from '../asset/251C_Flyer-04.png'

const Home = () => {
  return (
    <section className='home-wrapper'>
    <div className='home-container'>
   
     <img src={Image1} alt="image1" className='image' />
   
     
     <img src={Image2} alt="image1" className='image'/>
    
     
    
     <img src={Image3} alt="image1" className='image'/>
     
     
     <img src={Image4} alt="image1" className='image'/>
     
    </div>
    </section>
  )
}

export default Home