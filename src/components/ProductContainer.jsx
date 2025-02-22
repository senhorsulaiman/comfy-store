import React, { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import { useLoaderData } from 'react-router-dom'
import { MdPattern } from 'react-icons/md'
import SectionTitle from './SectionTitle'
import ProductList from './ProductList'

const ProductContainer = () => {
    const {meta}=useLoaderData()
    // console.log(meta)
    const totalProducts=meta.pagination.total;
    const [layout,setLayout]=useState('grid');

    const setActiveStyles=(pattern)=>{
        return `text-xl  btn btn-circle btn-sm ${pattern===layout?'btn-primary text-primary-content':'btn-ghost text-based-content'}`
    }
   
    
  return (
    <>
        {/* HEADER */}
        <SectionTitle text={`${totalProducts} products`} layoutoption='true'  setActiveStyles={setActiveStyles} setLayout={setLayout}/>
        
        {totalProducts===0?<>
        <h5 className='text-2xl mt-16'>Sorry ,no products mathched your search...</h5>
        </>:layout==='grid'?<ProductsGrid />:<ProductList/>}
    </>
  )
}

export default ProductContainer