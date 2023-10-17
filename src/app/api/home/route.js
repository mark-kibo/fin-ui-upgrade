import { NextResponse } from "next/server";
import axios from "axios";
// import { setCookie } from "nookies";
import { cookies } from 'next/headers'
const https =require("https")
export async function POST(request) {
  const { userName, password } = await request.json();
  console.log(userName, password);

  try {
    // Make the API request to authenticate the user
    const response = await axios.post(
      "https://localhost:7279/api/v1/users/login",
      {
        userName: userName,
        password: password,
      },
      {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      }
    );

    if (response.data.token) {
      // Set the token in a secure HTTP-only cookie
    //   setCookie(
    //     { res: response, name: "token" },
    //     "token",
    //     response.data.token,
    //     {
    //       httpOnly: true,
    //       secure:"development",
    //       maxAge: 60*60*4, // Set the appropriate expiration time
    //       sameSite: "strict",
    //       path: "/login",
    //     }
    //   );
        cookies().set("token", response.data.token)
    }

    return NextResponse.json(response.data);
  } catch (error) {
    // Handle errors, e.g., authentication failure
    console.error(error);
    return NextResponse.error("Authentication failed", 401);
  }
}
