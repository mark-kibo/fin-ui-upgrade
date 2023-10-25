"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../image/logo.png";
import Image from "next/image";

interface Errors {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
}

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [requestNote, setRequestNote] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({
	firstName: undefined,
	lastName: undefined,
	email: undefined,
	phoneNumber: undefined
});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    validateForm();
  }, [firstName, lastName, email, phoneNumber, requestNote]);

  // Validate form
  const validateForm = () => {
    let errors: Errors = {
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		phoneNumber: undefined
	};

    if (!firstName) {
      errors.firstName = ""; // Leave it empty
    } else if (!/^[A-Za-z\s]+$/.test(firstName)) {
      errors.firstName = "First name is invalid !";
    }

    if (!lastName) {
      errors.lastName = ""; // Leave it empty
    } else if (!/^[A-Za-z\s]+$/.test(lastName)) {
      errors.lastName = "Last name is invalid";
    }

    if (!email) {
      errors.email = ""; // Leave it empty
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "This is not a valid email address";
    }

    if (!phoneNumber) {
      errors.phoneNumber = ""; // Leave it empty
    } else if (!/^[0-9]{4}-[0-9]{3}-[0-9]{3}$/.test(phoneNumber)) {
      errors.phoneNumber =
        "Phone number is not in the correct format (e.g., 1234-567-890)";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  // Submit
  const handleSubmit = () => {
    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Sign up Form has errors. Please correct them.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col sm:w-2/2 justify-center items-center h-screen bg-white">
      <div className="w-1/3 text-[#1F5780] shadow-2xl p-5 rounded-2xl">
        <div className="flex justify-center items-center iconn__wrapper p-0">
          <Image width={280} height={60} alt="logo" src={logo} />
        </div>
        <p className="font-bold mb-5 text-[#1F5780]">Sign Up</p>
        <form>
          {/* ... (rest of the form) */}
        </form>
        <p className="flex items-center: md:flex-row justify-center items-center cursor-pointer align-bottom mt-5">
          <a>Already have an account? </a>
          <Link href="/login">
            <span className="font-bold">Login</span>
          </Link>
        </p>
        <div className="flex justify-center items-center h-4">
          <div className="flex items-center: md:flex-row justify-center items-center">
            <h5 className="mt-2 text-sm text-sky-900 ml-auto">
              Data Integration Technologies <span>&copy; 2023</span>
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
