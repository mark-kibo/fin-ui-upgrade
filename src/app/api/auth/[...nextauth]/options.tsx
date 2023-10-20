import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import https from "https"
import { baseUrl } from "@/utils/constants";

interface User {
  id: number;
  username: string;
  password: string;
  role: string;
  created_at: string;
  updated_at?: any;
  iat: number;
  exp: number;
  jti: string;
}



export const options:NextAuthOptions={
    session:{
        maxAge:60
    },
    jwt:{
        maxAge:60
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
    
          // Definition of credentials required for purposes of authentication
          credentials: {
            username: { label: "username", type: "text", name: "userName" },
            password: { label: "password", type: "password" },
          },
          async authorize(credentials) {
            if (!credentials) {
              return null; // Case handling when credentials are undefined
            }
            const { username, password } = credentials as {
              username: string;
              password: string;
            };
    
            // Send a POST request to authentication endpoint
            const res = await axios.post(baseUrl + "auth/login", {
              username: credentials.username,
              password: credentials.password,
              expiresInMins: 1
            }, {
              httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            });
    
            // Extraction of user data from the response
            const user = res.data;
            console.log(res.status);
            if (user) {
              // Return the user if authentication is successful
              return user;
            } else {
              return null;
            }
          },
        }),
      ],
      callbacks: {
        jwt: async ({ token, user }) => {
          if (user) token = user as unknown as { [key: string]: any };
          console.log(token);
    
          return token;
        },
        session: async ({ session, token }) => {
          session.user = { ...token };
          return session;
        },
      },
      secret: process.env.NEXTAUTH_SECRET, //secret key for NextAuth
      pages: {
        signIn: "/login", //custom login page
      }
}