"use client"
import Link from 'next/link';
import React, { useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MessageHandler from './MessageHandler/MessageHandler';
import { signIn, SignInOptions} from 'next-auth/react';
import Loading from './loading';
import { decryptRijndael, encryptRijndael } from '@/Encryption/encryptToken';
import DOMPurify from 'dompurify';
import logo from "../image/logo.png";
import Image from "next/image";
import { AlertColor } from '@mui/material';
import { LoginValidations } from './Validations/LoginValidations';


interface Credentials {
  username: string;
  password: string;
}

interface Option{
    redirect:boolean;
    credentials: Credentials;
}

function Login() {
  const [error, setError] = useState<{ type: string; message: string } | null>(null);
  const [success, setSuccess] = useState<{ type: string; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!LoginValidations(userName))
    {
      setError(
        {
          type: "error",
          message: "Invalid credentials, please try again"
        }
      )
      setLoading(false)
    }else{

      try {
            setError(null);
      
           
      
            const options: SignInOptions = {
              redirect: false ,
              username: decryptRijndael(userName),
              password: password,
            };
      
            const result = await signIn('credentials', options);
            console.log(result)
      
            if (result) {
              if (result.error) {
                setError({
                  type: 'error',
                  message: 'Invalid credentials, try again',
                });
              } else {
                setSuccess({
                  type: 'success',
                  message: 'Successfully logged in! Redirecting...',
                });
        
                router.push(callbackUrl ?? '/');
              }
            } else {
              // Handle the case where 'result' is undefined (e.g., due to an unexpected error)
              setError({
                type: 'warning',
                message: 'An unexpected error occurred during login.',
              });
            }
          } catch (error: any) {
            setError({
              type: 'warning',
              message: 'Contact administrator',
            });
          }
      
          setLoading(false);

    }
    
  
  };

  return (
    <main className="flex bg-[#ededed] min-h-screen flex-col sm:w-2/2 justify-center items-center h-screen">
      {loading ? (
        <Loading />
      ) : (
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
              {error ? <MessageHandler type={error.type as AlertColor} message={error.message} /> : ''}
              {success ? <MessageHandler type={success.type as AlertColor} message={success.message} /> : ''}
            </div>
            <form method='POST' onSubmit={(e) => handleSubmit(e)}>
              <div className='mb-4'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">User Name</label>
                <input
                  autoComplete="off"
                  onChange={(e) => {
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);
                    console.log( "Sanitized value:", sanitizedValue)
                    setUserName(encryptRijndael(sanitizedValue));
                    // console.log(matchesPattern(decryptRijndael(userName)))
                    console.log(userName)
                  }}
                  type="text"
                  name="userName"
                  id="name"
                  required
                  className={`bg-white text-asky-900 border border-sky-900 text-sm rounded w-full p-2.5`}
                  placeholder="John Doe"
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Password</label>
                <input
                  onPaste={(e) => e.preventDefault()}
                  autoComplete="Password"
                  onChange={(e) => {
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);
                    console.log( "Sanitized value:", sanitizedValue)
                    setPassword(encryptRijndael(e.target.value));
                    console.log(password)
                  }}
                  type="password"
                  name="password"
                  id="password"
                  required
                  className={`bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5`}
                  placeholder="Password"
                />
              </div>
              <div className='mb-5'>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Language</label>
                <select id="category" className='bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5'>
                  <option value="TV">en</option>
                </select>
              </div>
              <button className='bg-[#1F5780] rounded-md p-3 sm:col-span-2 w-full text-white' type="submit">Login</button>
            </form>
            <div className="flex justify-between">
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
    </main>
  );
}

export default Login;
