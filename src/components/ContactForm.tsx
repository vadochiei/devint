import Container from "./Container";

const ContactForm = () => {
  return (

	<div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-around items-center  md:flex-row flex-col">
        {/* textual content */}
        <div className="md:w-1/2 w-full ">
		
			
          <div className="flex-col mb-5 gap-5 flex">
		  <a href="tel:+40 744 301 846">
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-2/3 w-full rounded-lg group cursor-pointer items-center">
              {/* <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                +40 744 301 846
              </p>
            </div>
			</a>
			<a href="tel:+40 757 231 282">
			<div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-2/3 w-full rounded-lg group cursor-pointer items-center">
              {/* <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                +40 757 231 282
              </p>
            </div>
			</a>
			<a href="mailto:devintsolutions@gmail.com">
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-2/3 w-full rounded-lg group cursor-pointer items-center">
              {/* <GrMail className="text-xl text-gray-500  group-hover:text-white" /> */}
              <p className="text-gray-500 text-base font-semibold group-hover:text-white center">
			  devintsolutions@gmail.com
              </p>
            </div>
			</a>
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
        <div className="bg-white p-2 md:p-5 rounded-lg shadow-md">
			<h1 className="text-3xl p-3 py-6 font-semibold text-black">Get an estimation right away</h1>
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
              className="text-white bg-indigo-600 hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-blue-800"
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