"use client"

import Link from 'next/link';

import React, {

  useState, useEffect

} from 'react';




import { useRouter, useSearchParams } from 'next/navigation';

import MessageHandler from './MessageHandler/MessageHandler';

import { signIn } from 'next-auth/react';

import Loading from './loading';

import { decryptRijndael, encryptRijndael } from '@/Encryption/encryptToken';

import DOMPurify from 'dompurify';

import logo from "../image/logo.png";
import Image from "next/image";







function Login() {

  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(null);

  const [loading, setLoading] = useState(false);

  const [userName, setUserName] = useState('');

  const [password, setPassword] = useState('');



  //



  const router = useRouter()





  // handle login




  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl")



  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    setLoading(true)

    try {

      setLoading(true);

      setError(null)







      const res = await signIn("credentials", {

        redirect: false,

        username: decryptRijndael(userName), //decrypt my username since in the object its encrypted

        password: password,





      }).then(({ ok, error }) => {

        if (ok) {



          setSuccess(

            {

              type: "success",

              message: `successfully logged in!, redirecting.......`,

            }

          )

          setLoading(true)





          router.push(`${callbackUrl}`);

          setLoading(false)

        } else {

          setError(

            {

              type: "error",

              message: "username or password does not exist  or network issue"

            }

          )

        }

      });



    } catch (error: any) {

      setLoading(false);

      setError({

        type: "warning",

        message: "server is down"

      });

    }



    setLoading(false)

  }









  return (

    <main className="flex bg-[#ededed] min-h-screen flex-col sm:w-2/2  justify-center items-center h-screen">

      {loading ? (<Loading />) : (

        <div

          className='flex bg-white w-[90%] md:w-[40%] lg:w-[30%]  h-auto justify-center items-center p-1 m-5 shadow-2xl rounded-2xl'

          style={{

            overflow: 'hidden',



          }}

        >

          <div className='w-[100%] p-5 h-full  m-auto '>

       

            <div className="flex  justify-center items-center iconn__wrapper p-0">
              <Image width={280} height={60} alt="logo" src={logo} />
            </div>

            <div className='py-2'>

              {error ? (<MessageHandler type={error?.type} message={error?.message} />) : ""}

              {success ? (<MessageHandler type={success?.type} message={success?.message} />) : ""}



            </div>

            <form method='POST' onSubmit={(e) => {

              handleSubmit(e)

            }} >



              <div className='mb-4'>

                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">User Name</label>

                <input autoComplete="off" onChange={(e) => {

                  const sanitizedValue = DOMPurify.sanitize(e.target.value);

                  // console.log('Original Value:', e.target.value);

                  // console.log('Sanitized Value:', sanitizedValue);

                  setUserName(encryptRijndael(sanitizedValue));
                  console.log("username", userName)

                }}

                  type="text" name="userName" id="name" required className={`bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5 ${errors.userName ? 'border-red-600 text-red-600 text-sm' : ''}`} placeholder="John Doe" />





              </div>

              <div className='mb-4'>



                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Password</label>

                <input onPaste={(e) => { e.preventDefault() }} autoComplete="Password" onChange={(e) => {

                  const sanitizedValue = DOMPurify.sanitize(e.target.value);

                  // console.log('Original Value:', e.target.value);

                  // console.log('Sanitized Value:', sanitizedValue);

                  setPassword(encryptRijndael(sanitizedValue));
                  console.log("password", password)

                }}

                  type="password"

                  type="password" name="password" id="password" required className={`bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5 ${errors.password ? 'border-red-600 text-red-600 text-sm' : ''}`} placeholder="Password" />

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

      )}



    </main>)

}



export default Login