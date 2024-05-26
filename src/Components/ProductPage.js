import React,{useState,useEffect} from 'react'
import '../StyleSheet/productpage.css'
import Cart from './Cart'
import axios from 'axios'
import Additems from './Additems'
import { CartProvider } from 'react-use-cart'
import { useCart } from 'react-use-cart'

function ProductPage(props) {
    // console.log(data.productdata)

    const[data,setData] = useState([])
    const [cart,setCart] = useState([])

    

    const addItem = (item)=>{
        setCart([...cart,item])
        console.log(cart)
    }

    useEffect(()=>{
          axios.get('http://localhost:5000/getproducts')
          .then((res)=>setData(res.data))
          .catch((err)=>console.log(err))
          
    },[])
  
  return (
    <CartProvider>
    <> 
   
        <div className='container'>
          { data.map((item)=>{
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array((item.image.data.data)))
            );
             return(
                    
            < Cart 
            // title={item.title}
            //  price={item.price} 
            //  desc={item.desc} 
              image={`data:image/png;base64,${base64String}`}
            //  item={item}
             key={item.id}
            //  _id={item._id} 
            item={item}
             />
          )})}

          
        
        </div>
           <Additems />
        
    </>
    </CartProvider> 
  )
}
export default ProductPage; 
    