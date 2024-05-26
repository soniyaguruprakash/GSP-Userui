import React from 'react'
import { CiMail } from "react-icons/ci";
import '../StyleSheet/newsletter.css'


function Newsletter() {
  return (
    <div className='newsletter'>
      <form className='news-form'>
        <p>Signup for the <span style={{fontSize:"25px"}}><b>NEWSLETTER</b></span></p>
        <input type="text" placeholder="Enter your email" />
        <br />
        <br />
        <button type="submit"> <CiMail />  Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter