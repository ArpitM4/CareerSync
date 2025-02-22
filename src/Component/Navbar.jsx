import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( <>    <header className="text-gray-200 body-font bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl text-white">CareerSync</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5  hover:text-gray-100 cursor-pointer">Home</Link>
      <Link to="/seeker-profile" className="mr-5  hover:text-gray-100 cursor-pointer">Job Seeker Profile</Link>
        <Link to="/recruiter-profile" className="mr-5 hover:text-gray-100 cursor-pointer">Recruiter Profile</Link>
        <Link to="/seeker-reg" className="mr-5 hover:text-gray-100 cursor-pointer">Seeker Registration</Link>
        <Link to="/recruiter-reg" className="mr-5 hover:text-gray-100 cursor-pointer">Recruiter Registration</Link>
      </nav>
      <button className="inline-flex items-center text-blue-800 bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">Login      </button>
      <button className="inline-flex items-center ml-1 text-blue-800 bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">Sign-Up      </button>
    </div>
  </header> </>
 )
}

export default Navbar
