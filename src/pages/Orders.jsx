import React from 'react'
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import { OrdersList, SectionTitle, ComplexPaginationContainer } from '../components';

export const loader=(store)=>async({request})=>{
  console.log(store)
  const user =store.getState().userState.user;

   if(!user){

    toast.warn('you must loggedin to view orders')
    return redirect('/login')
   }
   const params=Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
   ])

   try{

    const response=await customFetch.get('/orders',{
      params,headers:{Authorization: `Bearer ${user.token}`}
    })
    // console.log(response)
    return {orders:response.data.data,meta:response.data.meta}
   }
   catch(error){

    const errorMessage=error?.response?.data?.message || 'there was an error placing your order'
    // console.log(error)
    toast.error(errorMessage);
    if(error.response.status===401|| 403 ){
      return redirect ('/login')
    }
    return null


   }
  
  

}
const Orders = () => {
  const {meta}=useLoaderData()
  if(meta.pagination.total<1){
    return <SectionTitle text='Plesse make an order'/>
  }
  return (
    <>
      <SectionTitle text='Your orders'/>
      <OrdersList/>
      <ComplexPaginationContainer/>
    </>
  )
}

export default Orders