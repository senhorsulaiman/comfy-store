import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const {meta,params}=useLoaderData();
  const {search,category,company,shipping,order,price}=params;
  
  // console.log(params)
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {/* SEARCH */}
      <FormInput type='serach' label='serach product' name='search' size='input-sm' defaultValue={search}/>
      {/* CATEGORIES */}
      <FormSelect label='select catogories' name='category' list={meta.categories} size='input-sm' defaultValue={category}/> 
        
      {/* COMPANIES */}
      <FormSelect label='select company' name='company' list={meta.companies} size='input-sm' defaultValue={company}/> 
      {/* ORDER */}
      <FormSelect label='sort by' name='order' list={['a-z','z-a']} size='input-sm' defaultValue={order}/> 
      {/* PRICE */}
      <FormRange label='price' name='price' size='input-sm' price={price}  />
      {/* SHIPPING */}
      <FormCheckbox label='shipping' name='shipping' size='input-sm' defaultValue={shipping}/>
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm  uppercase'>
        Search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm uppercase'> reset </Link>
    </Form>
  )
}

export default Filters