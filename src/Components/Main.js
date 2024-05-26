import React from 'react'
import HotDeal from './HotDeal'
import Newsletter from './Newsletter'
import { Routes,Route,  } from 'react-router-dom';
import Laptops from './Laptops';
import Home from './Home';
import '../StyleSheet/main.css'
import ProductPage from './ProductPage';
import Orderpage from './Orderpage';


function Main() {
  return (
    <div>
        <div className='mainLink'>
            <Routes>
                <Route path='/' element={<Home />} />
                 
                 <Route path='/productpage' element={<ProductPage />} />                 
                 {/* <Route path='/orderpage' element={<Orderpage />} /> */}
            </Routes>
        </div>
    </div>
  )
}

export default Main
