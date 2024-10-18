import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SigninPage() {
  return (
    <div className='mx-auto py-4'>
      <SignIn />
    </div>
  )
}
