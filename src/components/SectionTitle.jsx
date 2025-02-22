import React, { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const SectionTitle = ({text,layoutoption,setLayout,setActiveStyles}) => {
 
  return (
    <div className={`${layoutoption?'flex justify-between mt-8 border-b border-base-300 pb-5':'border-b border-base-300 pb-5'}`}>

        <h2 className='text-3xl font-medium tracking-wider capitalize'>

            {text}
        </h2>
        {layoutoption && <div className='flex gap-x-2'>

            <button type='button' onClick={()=>{setLayout('grid')}} className={setActiveStyles('grid')}>

              <BsFillGridFill/>
            </button>
            <button type='button' onClick={()=>{setLayout('list')}} className={setActiveStyles('list')}>

              <BsList/>
            </button>
          
          </div>}
    </div>
  )
}

export default SectionTitle