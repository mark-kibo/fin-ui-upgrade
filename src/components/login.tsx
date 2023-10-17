"use client"
import {
  Typography
} from '@mui/material';
import Link from 'next/link';
import React, {
  useState, useEffect, use, ReactEventHandler, ReactNode
} from 'react';
import {
  HiUser
} from "react-icons/hi"
import styles from "@/utils/css/layout.module.css"
import axios from "axios"
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import MessageHandler from './MessageHandler/MessageHandler';
function Login() {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  const router = useRouter()
  const https = require('https')

  // handle login 
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    // console.log(data)
  }

  async function getLoginToken(data) {
    try {
      const res = await axios.post("https://localhost:7279/api/v1/users/login", data, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      });
      // Check the response for errors, if any.
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      return res.data;
    } catch (error) {
      // Set the error state to display the error message.
      setError({
        type: "error",
        message: "Invalid credentials or an error occurred.",
      });
      console.error(error);
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    getLoginToken(data)
      .then((data) => {
        setTimeout(() => {
          if (data[0]) {
            router.push("/");
          }
        }, 3000);
      })
      .catch((error) => {
        // The error state has already been set in getLoginToken function.
      });
  }

  // fetch token data from api


  return (
    <main className="flex bg-[#ededed] min-h-screen flex-col sm:w-2/2  justify-center items-center h-screen">
      <div
        className='flex bg-white w-[90%] md:w-[40%] lg:w-[30%]  h-auto justify-center items-center p-1 m-5 shadow-2xl rounded-2xl'
        style={{
          overflow: 'hidden',

        }}
      >
        <div className='w-[100%] p-5 h-full  m-auto '>
          <h2 className='text-1xl font-bold mb-1 text-center capitalize text-sky-900 text-3xl'>finfinancials</h2>
          <div className="flex  justify-center items-center iconn__wrappe p-0">
            <HiUser className="text-sky-900" size={90} />
          </div>
          <div className='py-2'>
            {error && (<MessageHandler type={error.type} message={error.message} />)}

          </div>
          <form method='POST' onSubmit={(e) => {
            handleSubmit(e)
          }} >
            
            <div className='mb-4'>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">User Name</label>
              <input type="text" onChange={handleChange} name="username" id="name" className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5" placeholder="John Doe" id="Username" />
            </div>
            <div className="grid gap-4 mb-6 sm:grid-cols-2 ">
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Institution</label>
                <select id="category" className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5">
                  <option value="TV">Daimas Clove Sacco</option>
                </select>
              </div>
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Branch</label>
                <select id="category" className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5">
                  <option value="TV">001 Head office</option>
                </select>
              </div>
            </div>
            <div className='mb-5'>
              <label htmlFor="password" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-sky-900">Password</label>
              <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Language</label>
              <select id="category" className='bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5'>
                {/* className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                            focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" */}
                <option value="TV">en</option>
              </select>
            </div>

            <button className='bg-[#1F5780] rounded-md p-3 sm:col-span-2 w-full text-white' type="submit">Login</button>

          </form>
          

          <div className=" flex justify-between">
            <h5 className='text-sm p-2'>
              <Link href="/forgotpassword" className='text-gray-500 hover:text-sky-950 rounded-lg p-1'>
                Forgot password
              </Link>
            </h5>
            <h5 className='text-sm p-2'>
              <Link href="/signup" className='text-sky-900 hover:text-sky-950 rounded-lg p-1'>
                Sign up
              </Link>
            </h5>
            {/* bg-[#1F5780] */}
          </div>
          <div className="flex justify-center items-center h-4">
            <div className="flex items-center: md:flex-row justify-center items-center">
              <h5 className=' mt-2 text-sm text-sky-900  ml-auto'>
                Data Integration Technologies <span>&copy; 2023</span>
              </h5>
            </div>
            </div>
          </div>
      </div>
    </main>)
}

export default Login