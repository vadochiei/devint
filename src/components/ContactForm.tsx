import { FormEvent, useState } from "react";
import Container from "./Container";
import { setegid } from "process";
import { headers } from "next/dist/client/components/headers";
import { log } from "console";
'use client'

const ContactForm = () => {

  const [isSubmitted,  setSubmitted] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()

		console.log('Data', name, email, subject, message)

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({
					name, 
					email, 
					subject, 
					message,
				}),
				headers: {
					'content-type': 'application/json',
				},
			})
      if (res.status === 200) {
        setSubmitted(true)
      }
		} catch(err:any){
			console.error('err:', err)
		}

	}
	return (
	<div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-around items-center  md:flex-row flex-col">
        {/* textual content */}
        <div className="md:w-1/2 w-full ">
		
			
          <div className="flex-col mb-5 gap-5 flex">
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-2/3 w-full rounded-lg group cursor-pointer items-center" onClick={() => window.open('tel:+40 744 301 846', '_self')}>
              {/* <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                +40 744 301 846
              </p>
            </div>
			
			<div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-2/3 w-full rounded-lg group cursor-pointer items-center" onClick={() => window.open('tel:+40 757 231 282', '_self')}>
              {/* <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                +40 757 231 282
              </p>
            </div>

            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-2/3 w-full rounded-lg group cursor-pointer items-center" onClick={() => window.open('mailto:devintsolutions@gmail.com', '_self')}>
              {/* <GrMail className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white center">
			          devintsolutions@gmail.com
              </p>
            </div>

            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-2/3 w-full rounded-lg group cursor-pointer items-center">
              {/* <HiLocationMarker className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
			          Cluj-Napoca
              </p>
            </div>
          </div>

          <div className="flex gap-8  justify-center md:justify-start ">
            {/* <FaInstagram className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaPinterest className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaGithub className="text-2xl text-white hover:text-blue-700 cursor-pointer" /> */}
          </div>
        </div>
        {/* Contact form */}
        {/* <div className="bg-trueGray-800 p-2 md:p-5 rounded-lg shadow-md"> */}
		<div className="bg-black p-2 md:p-5 rounded-lg shadow-md">
{/* {isSubmitted? (
  <div><h1>Sent</h1></div>
): ( */}
  
  <form onSubmit={onSubmit} method="post"> 
            <h1 className="text-3xl p-3 py-6 font-semibold text-white">Get an estimation right away</h1>
        	<input
            	type="text"
              name="first_name"
              id="first_name"
              className="form-control bg-trueGray-800 dark:bg-black block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Full Name "
        	    required={true}
				      value={name}
              disabled={isSubmitted}
				      onChange={(e) => setName(e.target.value)}
            />
            <input
            	type="email"
            	name="email"
            	className="form-control bg-trueGray-800 dark:bg-black block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            	placeholder="Email "
            	required={true}
              disabled={isSubmitted}
				      value={email}
				      onChange={(e) => setEmail(e.target.value)}
            />
            <input
            	type="text"
            	name="subject"
            	className="form-control bg-trueGray-800 dark:bg-black block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            	placeholder="Subject "
            	required={true}
              disabled={isSubmitted}
				      value={subject}
				      onChange={(e) => setSubject(e.target.value)}
            />

            <div className="flex justify-center">
              <textarea
                className="form-control bg-trueGray-800 dark:bg-black block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Your message"
                required={true}
                disabled={isSubmitted}
				        value={message}
				        onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="text-white bg-indigo-600 hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-blue-800"
            >
              {isSubmitted? ("Message Sent"):("Send Message")}
              
            </button>
          </form>
{/* )} */}
    
			
          

        </div>
      </div>
    </div>
  );
}

export default ContactForm;