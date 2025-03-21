import React from 'react'
import { formatPrice, generateAmountOptions } from '../utils';
import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../features/cart/cartSlice';

const CartItem = ({cartitem}) => {
  const {cartID,
    image,
    title,
    price,
    amount,
    productColor,
    company}=cartitem;
    const dispatch=useDispatch()
    const removeItemFromTheCart=()=>{

      dispatch(removeItem({cartID}))
    }
    const handleAmount=(e)=>{
      dispatch(editItem({cartID,amount:parseFloat(e.target.value)}))
    }
  return (
    <div key={cartID} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">


      {/* IMAGE */}

      <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'/>
      {/* INFO */}
      <div className="sm:ml-16">
        {/* TITLE */}

        <h3 className='capitalize font-bold'>
          {title}
        </h3>

        {/* COMPANY */}
        <h4 className='mt-2 capitalize text-sm text-neutral-content'>{company}</h4>

         {/* COLOR */}
      <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
        color:
        <span className='badge badge-sm' style={{backgroundColor:productColor}}></span>
      </p>


      </div>
     <div className="sm:ml-16">
              {/* AMOUNT */}

              <div className="form-control max-w-xs">

                <label htmlFor="amount
                " className='label p-0'>

                  <span className='label-text'>Amount</span>
                 
                </label>
                <select name="amount" id="amount" value={amount} className='mt-2 select select-base select-bordered select-xs' onChange={handleAmount}>
                    {generateAmountOptions(amount+5)}
                  </select>
              </div>
              {/* REMOVE */}
              <button className='uppercase mt-2 link link-primary link-hover text-sm' onClick={removeItemFromTheCart}>
                remove
              </button>
     </div>

      {/* PRICE */}
      <p className='font-medium sm:ml-auto'>
        {formatPrice(price)}
      </p>
    </div>
  )
}

export default CartItem