// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";
// import https from "https"
// import { baseUrl } from "@/utils/constants";
// import { JWT } from "next-auth/jwt";
// import { encryptRijndael } from "@/Encryption/encryptToken";

// interface User {
//   id: number;
//   username: string;
//   password: string;
//   role: string;
//   created_at: string;
//   updated_at?: any;
//   iat: number;
//   exp: number;
//   jti: string;
// }





// export const options: NextAuthOptions = {
//   session: {
//     maxAge: 60*60*60
//   },
//   jwt: {
//     maxAge: 60*60*60
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       // Definition of credentials required for purposes of authentication
//       credentials: {
//         username: { label: "username", type: "text", name: "userName" },
//         password: { label: "password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           return null; // Case handling when credentials are undefined
//         }

//         // Send a POST request to authentication endpoint
//         const res = await axios.post(baseUrl + "api/v1/users/login", {
//           username: credentials.username,
//           password: credentials.password,
//         }, {
//           httpsAgent: new https.Agent({ rejectUnauthorized: false }),
//         });

//         // Extraction of user data from the response
//         const user = res.data;
//         console.log(res.status);
//         if (user) {
//           // Return the user if authentication is successful
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) token = user as unknown as { [key: string]: any };
//       // token.token=encryptRijndael(token.token)
//       // console.log(token.token)

//       // Return previous token if the access token has not expired yet
//       if (Date.now() < token.exp) {
//         return token
//       }

//       // Access token has expired, try to update it
//       return refreshAccessToken(token.token)
//     },
//     session: async ({ session, token }) => {
//       session.user = { ...token };
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET, //secret key for NextAuth
//   pages: {
//     signIn: "/login", //custom login page
//     error: "/login"
//   }
// }


// //handle refresh of token once expired
// async function refreshAccessToken(token) {
//   try {


//     const response = await axios.post(baseUrl + "api/v1/users/login/refresh", {
//       token: token
//     }, {
//       httpsAgent: new https.Agent({ rejectUnauthorized: false }),
//     })

//     const refreshedTokens = res.data

//     if (!response.ok) {
//       throw refreshedTokens
//     }

//     return {
//       ...token,
//       accessToken: refreshedTokens.access_token,
//       accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
//       refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
//     }
//   } catch (error) {
//     console.log(error)

//     return {
//       ...token,
//       status: 'unauthenticated',
//     }
//   }
// }
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import https from "https";
import { baseUrl } from "@/utils/constants";
import { JWT } from "next-auth/jwt";


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

export const options: NextAuthOptions = {
  session: {
    // Approach 1: Set session expiration after a period of inactivity
    maxAge: 60 , // Adjust as needed
  },
  jwt: {
    // Approach 2: Use short-lived access tokens
    maxAge: 60 , // Adjust as needed
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", name: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null; // Case handling when credentials are undefined
        }

        
        const res = await axios.post(baseUrl + "api/v1/users/login", {
          username: credentials.username,
          password: credentials.password,

        }, {
          httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        });

        const user = res.data;
        console.log(res.status);

        if (user) {
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

      // Approach 3: Token refresh mechanism
      // Check if the access token is about to expire and refresh it if needed
      if (typeof token.exp === 'number' && Date.now() + 60 > token.exp) {
        token = await refreshAccessToken(token);
      }

      // Approach 4: Session inactivity handling (log the user out)
      // You can implement an "inactivity timer" here to check user activity

      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    // error: "/login",
  },
};

async function refreshAccessToken(token: JWT) {
  try {
    const response = await axios.post(baseUrl + "api/v1/users/login/refresh", {
      token: token,
    }, {
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });

    const refreshedTokens = response.data;

    if (response.status === 200) { // Check the HTTP status code
      return {
        ...token,
        accessToken: refreshedTokens.access_token,
        accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
        refreshToken: refreshedTokens.refresh_token || token.refreshToken,
      };
    } else {
      throw refreshedTokens;
    }
   
  } catch (error) {
    console.log(error);

    return {
      ...token,
      status: 'unauthenticated',
    };
  }
}
