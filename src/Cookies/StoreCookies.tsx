'use server'
 
import { cookies } from 'next/headers'
 
export async function StoreCookie(data:any) {
  cookies().set(data)
  return "success"
}