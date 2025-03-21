import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

const CartTotals = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState)
    // console.log(cartTotal)
    return (
        <div className='card bg-base-200 mb-8'>
            <div className="card-body">
                {/* SUBTOTAL */}
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>

                    <span>Subtotal</span>
                    <span className='font-medium'>{formatPrice(cartTotal)}</span>
                </p>


                {/*SHIPPING */}
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>

                    <span>Shipping</span>
                    <span className='font-medium'>{formatPrice(shipping)}</span>
                </p>

                {/*TAX*/}
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>

                    <span>Tax</span>
                    <span className='font-medium'>{formatPrice(tax)}</span>
                </p>


                {/*ORDERTOTAL */}
                <p className='flex justify-between text-sm mt-4  '>

                    <span>Ordertotal</span>
                    <span className='font-medium'>{formatPrice(orderTotal)}</span>
                </p>




            </div>

        </div>
    )
}

export default CartTotals