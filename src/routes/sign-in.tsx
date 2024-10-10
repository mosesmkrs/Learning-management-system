import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className='h-screen mx-auto translate-y-8 w-fit'>
      <SignIn path="/sign-in"/>
    </div>
  )
}