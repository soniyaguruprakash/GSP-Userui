import React,{useEffect, useState} from 'react'
import { useCart } from 'react-use-cart';



function Cart({ item,image }) {

  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({...item, id: item._id,image});
  };

  // // console.log(addItem)

  // useEffect(()=>{
  //   console.log("addItem",addItem)
  

  // },[])
  // console.log("addItem",item._id)

  return (
    <>
              <div  className='product-item'>
                <img src={image} alt='Acer' width={250} height={250} />
                <hr />
                <div className='product-description'>
                <h5>{item.title}</h5>
                <h6 style={{color:'red'}}>${item.price}</h6> 
                <p className='product-desc'>{item.desc}</p>

                {/* <p>{item._id}</p> */}
                <button className='Addtocart-btn' onClick={handleAddToCart}>Add to Cart</button>
                </div>
                </div>
     
           
    </>

  )
}

export default Cart