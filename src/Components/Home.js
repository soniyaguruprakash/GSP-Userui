import React from 'react'
import Acer from '../Assets/Acer.png'
import Nokia from '../Assets/Nokia.png'
import Nikon from '../Assets/Nikon.png'
import HotDeal from './HotDeal'
import Newsletter from './Newsletter';
import '../StyleSheet/home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <div  className='product_list'>
    <div className='product-box'>
        
        <img className='product-img' src={Nokia} alt='mobile' width={150} height={150} style={{paddingBottom:'5px'}} />
        
        <div>
          <h5>Mobile Collection</h5>
          <button><NavLink to="/productpage">Shop Now</NavLink></button>  
        </div>
      </div>
        
        <div className='product-box'>
          
          <img className='product-img' src={Nikon} alt='Cameras' width={150} height={150} />
          
          <div>
          <h5>Camera Collection</h5>
            <button><NavLink to="/productpage">Shop Now</NavLink></button>
          </div>
        </div>
        
        <div  className='product-box'>
          
          <img className='product-img' src={Acer} alt='Laptops' width={150} height={150}/>
        
          <div>
          <h5>Laptop Collection</h5>
            <button><NavLink to="/productpage">Shop Now</NavLink></button>
          </div>
        </div>
        
    </div>   
      <HotDeal />
      <Newsletter />
    </>
  )
}

export default Home