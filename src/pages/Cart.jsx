import React from 'react'
import { useSelector } from 'react-redux';
import { CartitemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {

 
    const user =useSelector((state)=>state.userState.user)

  const numItemsInCart=useSelector((state)=>state.cartState.numItemsInCart);
  if(numItemsInCart===0){
    return(

      <SectionTitle text='Your Cart is empty'/>
    )
  }
  return (
    <>
       <SectionTitle text='Shopping Cart'/>
       
       <div className="mt-8 grid gap-8 lg:grid-cols-12 ">

          <div className="lg:col-span-8">
            <CartitemsList/>
          </div>
          <div className="lg:col-span-4">

            <CartTotals/>
            {user?<Link to='/checkout' className='btn uppercase btn-primary w-full'>proceed to check out</Link>:<Link to='/login' className='btn btn-primary uppercase w-full'>login to checkout</Link>}
          </div>
       </div>

    </>
  )
}

export default Cart