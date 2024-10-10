import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react'
import { useState } from 'react'

export default function Navbar() {
  const { isSignedIn, user } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="text-white bg-gray-900 border-b border-b-slate-500">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/" className={`hover:text-gray-300`}>MyApp</Link>
        </div>

        {/* Hamburger Icon */}
        <button 
          className="text-white sm:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`sm:flex sm:items-center sm:space-x-6 ${isOpen ? 'fixed top-12 right-0 rounded-sm w-fit bg-gray-600' : 'hidden'} sm:block transition-all duration-300 ease-in-out`}>
          <ul className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ${isOpen ? 'p-8' : ''}`}>

            <li>
              <Link to="/contact" className="hover:text-gray-300 sm:text-base" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-gray-300 sm:text-base" onClick={() => setIsOpen(false)}>Dashboard</Link>
            </li>

            {/* Conditional Links */}
            {isSignedIn ? (
              <SignedIn>
                <li className="flex gap-2 sm:text-base">
                  <UserButton />
                  {user?.fullName}
                </li>
              </SignedIn>
            ) : (
              <SignedOut>
                <li>
                  <Link to="/sign-in" className="hover:text-gray-300 sm:text-base" onClick={() => setIsOpen(false)}>Sign In</Link>
                </li>
                <li>
                  <Link to="/sign-up" className="hover:text-gray-300 sm:text-base" onClick={() => setIsOpen(false)}>Sign Up</Link>
                </li>
              </SignedOut>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
