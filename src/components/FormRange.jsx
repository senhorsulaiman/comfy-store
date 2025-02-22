import React, { useState } from 'react'
import { formatPrice } from '../utils'
const FormRange = ({name,label,size,price}) => {
    const step=10;
    const maxPrice=100000;
    const [selectedPrice,setSelectedPrice]=useState(price || maxPrice);


  return (
    <div className='form-control'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='labe-text capitalize'>{label}</span>
            <span>{formatPrice(selectedPrice)}</span>
        </label>

        <input type="range" name={name} min={0} max={maxPrice} value={selectedPrice} onChange={(e)=>setSelectedPrice(e.target.value)} className={`range range-primary ${size}` } step={step} />
        <div className="w-full flex justify-between text-xs items-center mt-2 px-2">
            <span className='font-bold text-md'>{formatPrice(0)}</span>
            <span className='font-bold  text-md'>{formatPrice(maxPrice)}</span>


        </div>
    </div>
  )
}

export default FormRange