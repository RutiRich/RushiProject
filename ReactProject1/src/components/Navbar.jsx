import React, { createContext, useContext, useEffect, useState } from 'react'
import './css/navbar.css'
import categoryContext from '../context/context';

const Navbar = () => {
  const [categories,setCategories] = useState(["...loading"]);
  const {setCategory} = useContext(categoryContext);
  const getCategories = async () => {
    const res =  await fetch("https://fakestoreapi.com/products/categories");
   const data= await res.json();
   setCategories(data);
   console.log(data);
  }

  useEffect(() =>{
    getCategories();
  },[])

  
  return (
    <div>
      <div  className='container'>
      <ul className='lipatent'> 
        {
        categories.map((category,index) => <li key={index} onClick={() =>{
          setCategory(category);
   //        console.log(category)
   }}
          >{category}</li>)
        }
      </ul>
    </div>
    </div>
  )
}

export default Navbar
