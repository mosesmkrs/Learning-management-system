import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className='w-fit mt-10 mx-auto'>
      <SignIn path="/sign-in"/>
    </div>
  )
}