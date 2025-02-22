import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({text}) => {
    const navigation=useNavigation()
    const isSubmitting=navigation.state==='submitting'
  return (
    <button type='submit' className='btn btn-primary w-full' disabled={isSubmitting}>

        {isSubmitting?<>
            <span className='loading loading-dots'>sending ..</span>
        </>:<>{text}</>}
    </button>
  )
}

export default SubmitBtn