import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// For definition of User interface with the expected user properties
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

const https = require('https');

// Configuration of the NextAuth handler
const handler = NextAuth({
  session: {
    strategy: "jwt",

    // Configuration of the user session expiration as well as update
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
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
        const res = await axios.post("https://localhost:7279/api/v1/users/login", {
          userName: credentials.username,
          password: credentials.password,
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
  secret: "supersecret", //secret key for NextAuth
  pages: {
    signIn: "/login",
    error: '/login',
  },
});

export { handler as GET, handler as POST };