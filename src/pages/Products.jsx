import React from 'react'
import { Filters, PaginationContainer, ProductContainer } from '../components'
import { customFetch } from '../utils';
const url='/products'
export const loader = async ({ request }) => {
  // console.log(request)
  const params=Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  // const search =params.get('search');
  // console.log(params)
  const response = await customFetch(url,{params});
  //  console.log(response)
  const products=response.data.data;
  const meta=response.data.meta;
  return {products,meta,params}
}
const Products = () => {
  return (
    <>
      <Filters/>
      <ProductContainer/>
      <PaginationContainer/>
    </>
  )
}

export default Products