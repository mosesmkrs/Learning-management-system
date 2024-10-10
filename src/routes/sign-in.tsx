import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className='mx-auto mt-10 w-fit'>
      <SignIn path="/sign-in"/>
    </div>
  )
}