import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <SignIn signUpUrl='/register' />
    </div>
  )
}

export default LoginPage