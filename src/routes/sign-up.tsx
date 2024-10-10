import { SignUp } from '@clerk/clerk-react'

export default function SignUpPage() {
  return (
     <div className='w-fit mt-10 mx-auto'>
      <SignUp path="/sign-up" />
     </div>
  )
}