import Container from "./Container";

const ContactForm = () => {
  return (

	// <form className="max-w-6xl mx-auto pt-10 pb-36 px-8 rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-indigo-600">
    //   <h1 className="text-2xl font-bold dark:text-gray-50">Get an estimation right away</h1>

    //   <label for="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
    //   <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

    //   <label for="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
    //   <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

    //   <label for="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
    //   <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

    //   <label for="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
    //   <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
    //   <div className="flex flex-row items-center justify-start">
    //     <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
    //       Send
    //       <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
    //       </svg>
    //     </button>
    //   </div>
    // </form>
// 	<div className="max-w-6xl mx-auto pt-10 pb-36 px-8">
//   <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
	<div className="max-w-7xl mx-auto ">
      <div className="flex justify-around items-center mx-20 md:flex-row flex-col">
        {/* textual content */}
        <div className="md:w-1/2 w-full md:p-10 my-10 md:my-0  flex-col">
		{/* <h1 className="text-4xl font-semibold text-white ">Get an estimation right away</h1>
          <p className="text-gray-300 font-semibold text-sm my-5">
		  Feel free to provide us with a concise description of the services you're seeking, and we'll be sure to reach out to you promptly.
          </p> */}
          <div className="flex-col my-20 gap-5 flex">
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              {/* <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                +40 744 301 846
              </p>
            </div>
			<div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              {/* <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                +40 757 231 282
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              {/* <GrMail className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white center">
			  devintsolutions@gmail.com
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
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
        <div className="bg-white p-12 rounded-lg shadow-md">
			<h1 className="text-3xl p-3 font-semibold text-black">Get an estimation right away</h1>
          <form>
            
        	<input
            	type="text"
                name="first_name"
                id="first_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Full Name "
        	    required={true}
            />
            <input
            	type="email"
            	name="email"
            	className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            	placeholder="Email "
            	required={true}
            />
            <input
            	type="text"
            	name="subject"
            	className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            	placeholder="Subject "
            	required={true}
            />

            <div className="flex justify-center">
              <textarea
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Your message"
                required={true}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;