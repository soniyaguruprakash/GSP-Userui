import React, { useEffect, useState } from 'react'
import '../StyleSheet/orderdetail.css'
import { Alert } from 'bootstrap'
import axios from 'axios'

function Orderpage(props) {
 
console.log(props.quanti)
console.log(props.tp)

  const [data,setData] =  useState({
    name:"",
    email:'',
    address:'',
    city:'',
    phoneNumber:''
  } )

  const handleChange=(e)=>{
    setData({...data,[e.target.id] : e.target.value });
  }

  const handleSubmit= async(e)=>{
    e.preventDefault()
   
    try{
      const result = await axios.post('http://localhost:5000/orderpage',{
      name:data.name,
      email:data.email,
      address:data.address,
      city:data.city,
      phoneNumber:data.phoneNumber  

     }
      )
      console.log(result);
     
     alert("Order placed Successfully")}
     catch(err){
         console.log(err)
     }
  }
  return (
    <div className='orderdetail'>
       

        <form className='orderform' onSubmit={handleSubmit}>
            
            <input type='text' id='name' required value={data.name} placeholder='Enter your name' onChange={handleChange}/>
            <input type='email' id='email' required value={data.email} placeholder='Email' onChange={handleChange} /><br />
            <input type='text' id='address' required value={data.address} placeholder='Address' onChange={handleChange} />
            <input type='text' id='city' required value={data.city} placeholder='City' onChange={handleChange} /><br />
            <input type='tele' id='phoneNumber' required value={data.phoneNumber} placeholder='Phone' onChange={handleChange}/>
            <br /><br />

            <button type='submit'  className='placeorder_btn'>Place Order</button>
        </form>
    </div>
  )
}

export default Orderpage