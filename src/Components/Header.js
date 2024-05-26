import React from 'react'
import { FaSearch,FaBars  } from "react-icons/fa";
import '../StyleSheet/header.css'
import { NavLink } from 'react-router-dom';
import HotDeal from './HotDeal';

function Header() {
  return (
    <>
      <header className='header'>
        <nav className='navigation'>
                         
                <div className='logo-header'>
                     
                    <label id="logo">GSP Services</label>
                <input type='search' placeholder='Search here...' />
                        <span> <FaSearch /></span>  
                </div>
                <input type='checkbox' id="check" />
                    <label for="check" className='checkbar'><FaBars /></label> 
                <div className='category-header'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="categories">Categories</NavLink></li>
                    <li><NavLink to="laptops">Laptops</NavLink></li>
                    <li><NavLink to="smartphones">Smartphones</NavLink></li>
                    <li><NavLink to="cameras">Cameras</NavLink></li> 
                </ul>
                </div>
                
             
             

        </nav>
        
        </header>
    </>
  )
}

export default Header