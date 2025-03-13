import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link ,redirect, useNavigate} from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toast'
import { loginUser } from '../features/user/userSlice';
import {useDispatch} from 'react-redux'

export const action=(store)=>async({request})=>{
  
 
  const formData=await request.formData();
  const data=Object.fromEntries(formData)
  try{
  
    const response=await customFetch.post('auth/local',data)
    store.dispatch(loginUser(response.data))
    dispatch(loginUser(response.data))
    toast.success('welocome guest user');
    return navigate('/') 
    // return null
  }
  catch(error){
    const errorMessage=error?.response?.data?.message || 'please double check credentials'
    toast.error(errorMessage);
    // console.log(errorMessage)

    return null
  }

}

const Login = () => {
  // console.log(something)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const loginasGuestUser=async()=>{

    try{
  
      const response=await customFetch.post('auth/local',
        {
          identifier:"test@gmail.com",
          password:"secret",
      }
      )
 

      toast.success('login sucessfully');
      return    navigate('/')
      // return null
    }
    catch(error){
      // const errorMessage=error?.response?.data?.message || 'please double check credentials'
      toast.error('guest user login error please try agin');
      // console.log(errorMessage)
   
  
      return null
    }

  }

  return (
    <section className='h-screen grid place-items-center text-left '>

      <Form method="post" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>

          Login
        </h4>
        <FormInput type='email' label='email' name='identifier' defaultValue='test@test.com' />

        <FormInput type='password' label='password' name='password' defaultValue='secret' />

        <div className="mt-4">

          <SubmitBtn  text='login'/>
         
        </div>
        <button type='button' className='btn btn-secondary btn-block' onClick={loginasGuestUser}>
            guest user
          </button>
          <p className='text-center'>Not a member yer? <Link  to='/register' className='ml-2 link link-hover link-primary capitalize'>Register</Link></p>
      </Form>


    </section>
  )
}

export default Login