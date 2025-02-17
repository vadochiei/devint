import Container from "./Container";

const Services = () => {
  return (

<main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
  <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start gap-10 ">
    
    <div className="w-full flex-1 p-8 order-2 bg-white  shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1">
      <div className="mb-8 pb-8 flex items-center border-b border-gray-300">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" className="rounded-3xl w-20 h-20" />
        <div className="ml-5">
          <span className="block text-2xl font-semibold dark:text-indigo-600">Web Development</span>
          {/* <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">10 </span></span><span className="text-gray-500 font-medium">/ user</span> */}
        </div>
      </div>
      <ul className="mb-10 font-medium text-gray-500 text-xl">
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Custom <span className="text-black">App</span> Creation</span>
        </li>
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Cross-Platform<span className="text-black"> Compatibility</span></span>
        </li>
        <li className="flex">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3"><span className="text-black">Unlimited</span> cloud storage</span>
        </li>
      </ul>
    </div>
    
    <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-indigo-600 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
      <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
        <img src="https://cdn-icons-png.flaticon.com/512/7075/7075373.png"  alt="" className="rounded-3xl w-20 h-20" />
        <div className="ml-5">
          <span className="block text-3xl font-semibold text-white">Mobile Development</span>
          {/* <span><span className="font-medium text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-white">24 </span></span><span className="font-medium">/ user</span> */}
        </div>
      </div>
      <ul className="mb-10 font-medium text-xl">
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3">Custom <span className="text-white">App</span> Creation</span>
        </li>
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3">Cross-Platform<span className="text-white"> Compatibility</span></span>
        </li>
        <li className="flex">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3"><span className="text-white">User-Centric</span> Design</span>
        </li>
      </ul>
    </div>

 
    <div className="w-full flex-1 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3">
      <div className="mb-8 pb-8 flex items-center border-b border-gray-300">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" className="rounded-3xl w-20 h-20" />
        <div className="ml-5">
          <span className="block text-2xl font-semibold dark:text-indigo-600">Cloud Infrastructure</span>
          {/* <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">35 </span></span><span className="text-gray-500 font-medium">/ user</span> */}
        </div>
      </div>
      <ul className="mb-10 font-medium text-gray-500 text-xl">
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Custom <span className="text-black">App</span> Creation</span>
        </li>
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Cross-Platform<span className="text-black"> Compatibility</span></span>
        </li>
        <li className="flex">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3"><span className="text-black">Unlimited</span> cloud storage</span>
        </li>
      </ul>
    </div>
    
  </div>
  
</main>

  );
}

export default Services;