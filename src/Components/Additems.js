import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import'../StyleSheet/productpage.css'
import Orderpage from './Orderpage'

function Additems() {
    const [show,setShow] = useState(false)
    const {
         items,
         isEmpty,
         totalUniqueItems,
         totalItems,
         cartTotal,
         updateItemQuantity,
         removeItem,
         emptyCart

     } = useCart();
     if(isEmpty){
        return <h4 style={{textAlign:"center"}}>Your cart is Empty</h4>
     }

    return (
        <>
   <section className='Additemstocart'>
         <h5>Cart ({totalUniqueItems}) total items ({totalItems})</h5>
        <table className='items-table'>
            <tbody>
            {items.map((item,id)=>{
                return(
                <tr key={item.id}>
                    <td><img src={item.image} height={100} width={100}/></td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td><button className='add' onClick={()=>updateItemQuantity(item.id, item.quantity+1)} >+</button></td>
                    <td><button className='min'  onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button></td>                  
                     <td>
                        <button className='rem_btn' onClick={()=>removeItem(item.id)}>
                            Remove Item
                        </button>
                    </td>
                </tr>
            )})}
            </tbody>
        </table>
        <br/>
        <div className='proceedtoorder' style={{display:'flex', flexWrap:"wrap", gap:'10px',marginBottom:"20px", justifyContent:'center'}}>
            <h5 className='totalprice' >
                Total Price :({cartTotal})
            </h5>
            <button className='clrcart-btn' onClick={()=>emptyCart()}>Clear Cart</button>
             <button className='buynow-btn' onClick={()=>setShow(true)}>Proceed to Order</button>
     </div>
   </section>
            <br />
     <div>
        { show ? <Orderpage  /> : null}
     </div>
   </>
  )
}

export default Additems