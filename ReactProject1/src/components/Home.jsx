import React, { useContext, useEffect, useState } from 'react'
import categoryContext from '../context/context'
import './css/home.css'

const Home = () => {
  const {category} = useContext(categoryContext);
  const [catData,setCatData] = useState();

  const categoryView = async () => {
     const res = await fetch("https://fakestoreapi.com/products/category/"+category);
     const data = await res.json();
     setCatData(data);
     console.log(data);
  }
  useEffect(() =>{
    categoryView();
  },[category])

  if(!catData){
    return  <div>
     <h1>Loading products</h1>
     </div>
   }
  return (
    <div className='images'>{
      catData.map((items,index) => { return <img key={index} src ={items.image}></img>  }) 
    }
    </div>
  )
}

export default Home
