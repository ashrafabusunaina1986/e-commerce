import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignupPage() {
  return (
    <div className='mx-auto py-4'>
      <SignUp />
    </div>
  )
}
