import { SignUp } from '@clerk/clerk-react'

export default function SignUpPage() {
  return (
     <div className='h-screen mx-auto translate-y-8 w-fit'>
      <SignUp path="/sign-up" />
     </div>
  )
}