import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='h-full mt-5 flex items-center justify-center my-12'>
      <SignUp signInUrl='/login' />
    </div>
  )
}

export default RegisterPage