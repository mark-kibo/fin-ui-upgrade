import NextAuth from "next-auth";

import { options } from "./options";

// For definition of User interface with the expected user properties



// Configuration of the NextAuth handler
const handler = NextAuth(options);

export { handler as GET, handler as POST };