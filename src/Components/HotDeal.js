import React from 'react'
import '../StyleSheet/deal.css'
import Acer from '../Assets/Acer.png'
import Nokia from '../Assets/Nokia.png'


function HotDeal() {
  return (
    <div className='hotdeal'>
        <div className='deal_img'>
          <img src={Nokia} width={300} height={300} alt='Mobile'/>
        </div>

        <div className='offerdeal'>  
          <div className='offer'>      
            <span className='deal'>02<br /><small>Days</small></span>
            <span className='deal'>10<br /><small>Hrs</small></span>
            <span className='deal'>40<br /><small>Mins</small></span>
            <span className='deal'>30<br /><small>Sec</small></span>
          </div>
            <br />
            <h4>HOT DEAL THIS WEEK</h4>
            <h5>NEW COLLECTION UP TO 50% OFF </h5>
            <br />
            <button className='shop_btn'>Shop Now</button>

        </div>
        <div  className='deal_img'>
          <img src={Acer} width={350} height={350} alt='Laptop'/>
        </div>
       
    </div>
  )
}

export default HotDeal