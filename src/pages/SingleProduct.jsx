import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { addItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
export const loader = async ({ params }) => {
  const response = await customFetch(`products/${params.id}`);
  return { product: response.data.data }

}
const SingleProduct = () => {
  const { product } = useLoaderData()
  const { company, image, price, title, colors, catogory, description } = product.attributes;
  const aedAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {

    setAmount(e.target.value)
  }
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };
  const dispatch=useDispatch()
  const addToCart = () => {
    dispatch(addItem({product:cartProduct}))

  }

  return (
    <section>

      <div>
        <div className="text-md breadcrumbs">
          <ul>

            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Products'>Products</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* product */}

      <div className='mt-6 grid gap-y-6 lg:grid-cols-2 lg:gap-x-16'>

        <img src={image} alt={title} className='w-96 h-96 object-cover lg:w-full rounded-lg' />


        <div>

          <h1 className="capitalize text-3xl font-bold">
            {title}
          </h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>

          <p className='mt-3 text-xl '>{aedAmount}</p>
          <p className='mt-6 leading-8'> {description}</p>

          <div className="mt-6">


            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            {/* colors */}
            <div className='mt-2'>
              {colors.map((color) => {

                return <button key={color} type='button' className={`badge rounded-full w-6 h-6 mr-2 cursor-pointer ${color === productColor && 'border-2 border-secondary'}`} style={{ backgroundColor: color }} onClick={() => setProductColor(color)}></button>
              })}
            </div>
            {/* amount */}
            <div className="form-control w-full max-w-xs mt-2">
              <label htmlFor="" className='label'>

                <h4 className='text-md font-medium tracking-wider capitalize'>amount</h4>
              </label>
              <select name='' id='amount' value={amount} onChange={handleAmount} className='mt-1 select select-secondary select-md border-1'>
                {generateAmountOptions(5)}
              </select>
              {/* CART BTN */}

              <div className='mt-10'>

                <button className='btn btn-secondary uppercase' onClick={addToCart}> add to bag</button>


              </div>



            </div>

          </div>
        </div>


      </div>

    </section>
  )
}

export default SingleProduct