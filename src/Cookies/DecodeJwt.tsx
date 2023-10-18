import React from 'react'
import { getToken , decode} from "next-auth/jwt";
import { useSession } from 'next-auth/react';

const secret = "development";
export default async const DecodeJwt = () => {
    const {data:session}= useSession();
  const user=await decode({
    token:session.user.token,
    secret:secret
  });
  return user
}

export default DecodeJwt
