import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link ,redirect, useNavigate} from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice';
import {useDispatch} from 'react-redux'

export const action=(store)=>async({request})=>{
  const formData=await request.formData();
  const data=Object.fromEntries(formData)
  try{
    const response=await customFetch.post('auth/local',data)
     store.dispatch(loginUser(response.data))
    // dispatch(loginUser(response.data))
    // console.log(response)
    toast.success('logged in succssfully');
    return redirect('/');
   
    
  }
  catch(error){
    const errorMessage=error?.response?.data?.message || 'please double check credentials';
    toast.error(errorMessage)
    // console.log(errorMessage)
    return null
  }

}

const Login = () => {
  // console.log(something)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const loginAsGuestUser=async()=>{

    try{
  
      const response=await customFetch.post('/auth/local',
        {
          identifier:"test@test.com",
          password:"secret",
        }
      )
 
      dispatch(loginUser(response.data))
      toast.success('welcome guest user');
      return   navigate('/')
      // return null
    }
    catch(error){
      // const errorMessage=error?.response?.data?.message || 'please double check credentials'
      console.log(error)
      toast.error('guest user login error please try agin');
      // console.log(error)
   
  
      // return null
    }

  }

  return (
    <section className='h-screen grid place-items-center text-left '>

      <Form method="POST" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>

          Login
        </h4>
        <FormInput type='email' label='email' name='identifier'  />

        <FormInput type='password' label='password' name='password'  />

        <div className="mt-4">

          <SubmitBtn  text='login'/>
         
        </div>
        <button type='button' className='btn btn-secondary btn-block' onClick={loginAsGuestUser}>
            guest user
        </button>
        <p className='text-center'>Not a member yer?
           <Link  to='/register' className='ml-2 link link-hover link-primary capitalize'>Register</Link>
           </p>

      </Form>


    </section>
  )
}

export default Login