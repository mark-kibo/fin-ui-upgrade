"use client"
import React,{ useState, useEffect } from 'react'; 
import Link from 'next/link'
const signup = () => { 
	const [firstName, setFirstName] = useState(''); 
	const [lastName, setLastName] = useState(''); 
	const [email, setEmail] = useState(''); 
	const [phoneNumber, setPhoneNumber] = useState('');
	const [requestNote, setRequestNote] = useState('');
	const [errors, setErrors] = useState({}); 
	const [isFormValid, setIsFormValid] = useState(false); 
	

	useEffect(() => { 
		validateForm(); 
	}, [firstName,lastName, email, phoneNumber,requestNote]); 
	// Validate form 
	const validateForm = () => { 
		let errors = {}; 

		if (!firstName) {
			errors.firstName = '';  // Leave it empty
		} else if (!/^[A-Za-z\s]+$/.test(firstName)) {
			errors.firstName =  'First name is invalid !';
		}
		

		if (!lastName) {
			errors.lastName = '';  // Leave it empty
		} else if (!/^[A-Za-z\s]+$/.test(lastName)) {
			errors.lastName = 'Last name is invalid';
		}

		if (!email) {
			errors.email = '';  // Leave it empty
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'This is not a valid email address';
		}
		if (!phoneNumber) {
    errors.phoneNumber = '';  // Leave it empty
} else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phoneNumber)) {
    errors.phoneNumber = 'Phone number is not in the correct format (e.g., 123-456-7890)';
}

		
		setErrors(errors); 
		setIsFormValid(Object.keys(errors).length === 0); 
	}; 
	// Handle input with validation
  
  
	// Submit 
	const handleSubmit = () => { 
		if (isFormValid) { 
			console.log('Form submitted successfully!'); 
		} else { 
			console.log('Sign up Form has errors. Please correct them.'); 
		} 
	}; 


    return (
        <main className="flex min-h-screen flex-col sm:w-2/2  justify-center items-center h-screen bg-white">
            <div className='w-1/3  text-[#1F5780] shadow-2xl p-5 rounded-2xl '>

                {/* <h1 className='text-3xl font-bold items-center' >FinFniancials</h1> */}
                <h2 className='text-2xl text-center font-bold mb-5 text-[#1F5780]'>FinFinancials</h2>
                <p className='font-bold mb-5 text-[#1F5780]'>Sign Up</p>
                <form>
                    <div className="grid gap-4 mb-2 sm:grid-cols-2 ">
					<div>
  <label htmlFor="name" className="block mb-2 text-[#1F5780] text-sm font-medium dark:text-white">
    First Name
  </label>
  <input
    onChange={(e) => setFirstName(e.target.value)}
    type="text"
    name="name"
    id="name"
    required
    className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
      errors.firstName ? 'border-red-500 text-red-500 text-sm' : ''
    }`}
    placeholder="John"
  />
  {errors.firstName && (
    <p className="text-red-500 text-sm">{errors.firstName}</p>
  )}
</div>


                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm text-[#1F5780] font-medium dark:text-white">Last Name</label>
                           
							<input
    onChange={(e) => setLastName(e.target.value)}
    type="text"
    name="name"
    id="name"
    required
    className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
      errors.lastName ? 'border-red-500 text-red-500 text-sm' : ''
    }`}
    placeholder="Doe"
  />
  {errors.lastName && (
    <p className="text-red-500 text-sm">{errors.lastName}</p>
  )}
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="name" className="block mb-2 text-[#1F5780] text-sm font-medium dark:text-white">Email</label>
							<input
    onChange={(e) => setEmail(e.target.value)}
    type="text"
    name="name"
    id="name"
    required
    className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
      errors.email ? 'border-red-500 text-red-500 text-sm' : ''
    }`}
    placeholder="johndoe@gmail.com"
  />
  {errors.email && (
    <p className="text-red-500 text-sm">{errors.email}</p>
  )}

                        </div>
                        <div className='mb-1'>
                            <label htmlFor="phone" className="block mb-2 text-sm  text-[#1F5780] font-medium dark:text-white">Phone</label>
                            <input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder='070000000' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
							{errors.phoneNumber  && <p className='text-red'>{errors.phoneNumber }</p>}
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="organization" className="block mb-2 text-sm text-[#1F5780]  font-medium dark:text-white">Institution Name</label>
                            <input type="text" id="organization" name="organization" required placeholder='Fintech-Group' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="position" className="block mb-2 text-sm text-[#1F5780] font-medium dark:text-white">Position</label>
                            <input type="text" id="position" name="position" required placeholder='Manager' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium dark:text-sky-900">Institution Type</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="TV">Sacco</option>
                                <option value="TV">MFI</option>
                                <option value="TV">Bank</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium  dark:text-sky-900">Bouquet</label>
                            <select id="category" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="TV">Lite</option>
                                <option value="TV">Standard</option>
                                <option value="TV">Enterprise</option>

                            </select>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="location" className="block mb-2 text-sm text-[#1F5780] font-medium  dark:text-white">Country</label>
                        <input type="text" id="location" name="location" required placeholder='Kenya' className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="location" className="block mb-2 text-sm text-[#1F5780] font-medium  dark:text-white">Location</label>
                        <input type="text" id="location" name="location" required placeholder='Nakuru' className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-2 text-sm text-[#1F5780] font-medium  dark:text-white">Request Note</label>
                        <textarea name="request" id="" className="bg-gray-50 border mb-4 border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " ></textarea>
                    </div>
                    <Link href='/login'><button className='bg-[#1F5780] rounded-md p-3 sm:col-span-2 w-full text-white' type="submit" >Sign Up</button></Link>
                </form>
                <p className='flex items-center: md:flex-row justify-center items-center cursor-pointer inline-block align-bottom mt-5'>
                <a>Already have an account? </a><Link href='/login'><span className='font-bold'>Login</span></Link>
                </p>
                <div className="flex justify-center items-center h-4">
              <div className="flex items-center: md:flex-row justify-center items-center">
                <h5 className=' mt-2 text-sm text-sky-900  ml-auto'>
                  Data Integration Technologies <span>&copy; 2023</span>
                </h5>
              </div>
            </div>
            </div>
        
        </main>
    )
}

export default signup