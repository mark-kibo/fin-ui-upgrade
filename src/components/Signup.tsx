import React from 'react'
import Link from 'next/link'
function signup() {
    return (
        <main className="flex min-h-screen flex-col sm:w-2/2  justify-center items-center h-screen bg-white">
            <div className='w-1/3  text-[#1F5780] shadow-2xl p-5 rounded-2xl '>

                {/* <h1 className='text-3xl font-bold items-center' >FinFniancials</h1> */}
                <h2 className='text-2xl text-center font-bold mb-5 text-[#1F5780]'>FinFinancials</h2>
                <p className='font-bold mb-5 text-[#1F5780]'>Sign Up</p>
                <form>
                    <div className="grid gap-4 mb-2 sm:grid-cols-2 ">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-[#1F5780] text-sm font-medium dark:text-white">First Name</label>
                            <input type="text" name="name" id="name" required className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm text-[#1F5780] font-medium dark:text-white">Last Name</label>
                            <input type="text" name="name" id="name" required className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Doe" />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="name" className="block mb-2 text-[#1F5780] text-sm font-medium dark:text-white">Email</label>
                            <input type="email" name="email" id="email" required className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="johndoe@gmail.com" />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="phone" className="block mb-2 text-sm  text-[#1F5780] font-medium dark:text-white">Phone</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder='070000000' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="organization" className="block mb-2 text-sm text-[#1F5780]  font-medium dark:text-white">Institution Name</label>
                            <input type="text" id="organization" name="organization" required placeholder='Fintech-Group' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="position" className="block mb-2 text-sm text-[#1F5780] font-medium dark:text-white">Position</label>
                            <input type="text" id="position" name="position" required placeholder='Manager' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium dark:text-sky-900">Institution Type</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="TV">Sacco</option>
                                <option value="TV">MFI</option>
                                <option value="TV">Bank</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium  dark:text-sky-900">Bouquet</label>
                            <select id="category" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="TV">Lite</option>
                                <option value="TV">Standard</option>
                                <option value="TV">Enterprise</option>

                            </select>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="location" className="block mb-2 text-sm text-[#1F5780] font-medium  dark:text-white">Country</label>
                        <input type="text" id="location" name="location" required placeholder='Kenya' className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="location" className="block mb-2 text-sm text-[#1F5780] font-medium  dark:text-white">Location</label>
                        <input type="text" id="location" name="location" required placeholder='Nakuru' className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-2 text-sm text-[#1F5780] font-medium  dark:text-white">Request Note</label>
                        <textarea name="request" id="" className="bg-gray-50 border mb-4 border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
                    </div>
                    <Link href='/login'><button className='bg-[#1F5780] rounded-md p-3 sm:col-span-2 w-full text-white' type="submit">Sign Up</button></Link>
                </form>
                <p className='cursor-pointer inline-block align-bottom mt-5'>
                    <Link href='/login'><a>Already have an account? </a><span className='font-bold'>Login</span></Link>
                </p>
            </div>

        </main>
    )
}

export default signup