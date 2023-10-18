import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"

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
const https=require('https')


const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", name:"userName" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const res =await axios.post("https://localhost:7279/api/v1/users/login", {
            userName:credentials.username,
            password:credentials.password
        }, {
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        })  
        // tipar peticion de user
        const user = res.data;
        console.log(res.status)
        if (user) {
          // mostrar el encabezado de autorización en la consola
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
      session.user = { ...token }
      return session;
    },
  },
  secret: "supersecret",
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };