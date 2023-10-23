import { NextResponse } from "next/server";
import axios from "axios";
// import { setCookie } from "nookies";

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
    return NextResponse.json(response.data);
  } catch (error) {
    // Handle errors, e.g., authentication failure
    console.error(error);
    return NextResponse.error("Authentication failed", 401);
  }
}
