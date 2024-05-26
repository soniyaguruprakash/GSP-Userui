import React from 'react'
import '../StyleSheet/footer.css'

function Footer() {
  return (
    <>
        <div className='footer'>
             <div className='row'>
                <div className='col-3'>   
                    <h6>ABOUT US</h6>
                        <li><a href='#'>14-B Nandavanam , Salem </a></li>
                        <li><a href='#'>+1234567890</a></li>
                        <li><a href='#'>email@gmail.com</a></li>
                </div>
                <div className='col-3'>                
                    <h6>CATEGORIES</h6>
                        <ul>
                        <li><a href="hotdeals">HotDeals</a></li>
                        <li><a href="laptops">Laptops</a></li>
                        <li><a href="smartphones">Smartphones</a></li>    
                        <li><a href="cameras">Cameras</a></li>
                        </ul>
                </div>
                <div className='col-3'>                
                    <h6>INFORMATION</h6>
                        <li><a href='#'>About us </a></li>
                        <li><a href='#'>Contact us </a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Orders and Returns </a></li>
                        <li><a href='#'>Terms and Conditions </a></li>
                </div>
                <div className='col-3'>               
                    <h6>SERVICE</h6>
                    <li><a href='Signin'>My Account</a></li>
                    <li><a href='Signin'>View Card</a></li>
                    <li><a href='Signin'>Track My Order</a></li>
                    <li><a href='Signin'>FAQ</a></li>
                    <li><a href='Signin'>Help</a></li>

                    </div>
                </div>
                <hr />
                <div className='copy-right'>                    
                     <p className=''>Copyright ©2024 All rights reserved | This template is made with soniya Guruprakash</p>
                </div>
                
                
                   
            
                
            </div>
            
           
            
    
    </>
  )
}

export default Footer