'use server'
 
import { cookies } from 'next/headers'
 
export async function GetCookie(data:any) {
  const storedCookie = cookies()
  return storedCookie;
}