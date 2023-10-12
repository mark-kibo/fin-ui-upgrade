import Link from 'next/link'
import React from 'react'

function forgotpassword() {
  return (
    <main className='min-h-screen'>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-2xl">
                <div className="w-full px-8 max-w-lg space-y-6 bg-white rounded-md py-16 shadow-2xl">
                    <h1 className=" mb-6 text-3xl font-bold text-center text-[#1F5780]">
                        Don't worry
                    </h1>
                    <p className="text-center mx-12">We are here to help you to recover your password. Enter the email address you used
                        when you joined and we'll send you instructions to reset your password.</p>
                    <form action="#" className="space-y-6 w-ful">
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            type="email" name="email" placeholder="Email address" required/>
                        <div>
                            <Link href="/resetpassword" >
                            <button type="submit"
                                className="w-full px-4 py-2 font-medium text-center text-white bg-[#1F5780] transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                                Send
                            </button>
                            </Link>
                        </div>
                    </form>
                    <div className="text-sm text-gray-600 items-center flex justify-between">
                        <p className="text-gray-800 cursor-pointer hover:text-[#1F5780] inline-flex items-center ml-4">
                        
                        <Link href="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clip-rule="evenodd" />
                        </svg>
                        
                        Back
                        </Link>
                        </p>
                        {/* <p className="hover:text-blue-500 cursor-pointer">Need help?</p> */}
                    </div>
                </div>
            </div>
    </main>
  )
}

export default forgotpassword