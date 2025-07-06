import { FaLocationDot } from 'react-icons/fa6';
import { PiPhoneCall } from 'react-icons/pi';
import { LuMail } from 'react-icons/lu';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      {/* first section */}
      <div className="h-auto p-8 md:p-20 text-center text-5xl text-black">
        <h2 className="mb-4">Get In Touch</h2>
        <p className="mx-auto mb-4 text-sm">
          Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. elit.
          Impedit, ex. Fugiat ab eius rem culpa.
        </p>
        <p className="mx-auto text-sm">
          Lorem ipsum dolor, sit amet consectetur Consequuntur, itaque
          repudiandae. Quam porro cumque error.
        </p>
      </div>

      {/* secound section */}
      <div className="mb-5 flex flex-col justify-center gap-4 px-4 md:flex-row">
        {/* first div */}
        <div className="h-40 w-full bg-stone-100 text-center md:w-1/4">
          <div className="content mt-5">
            <FaLocationDot
              className="text-[#35AFA0] mx-auto mt-3 mb-4"
              size={30}
            />
            <p className="mb-3 text-sm">102 Street 2714 Donovan</p>
            <p className="text-sm font-light">
              Lorem ipsum dolar site amet discont
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="h-40 w-full bg-stone-100 text-center md:w-1/4">
          <div className="content mb-3">
            <PiPhoneCall
              className="text-[#35AFA0] mx-auto mt-3 mb-5"
              size={30}
            />
            <p className="mb-4 text-sm">+02 1234 567 88</p>
            <p className="text-sm font-light">
              Lorem ipsum dolar site amet discont
            </p>
          </div>
        </div>

        {/* third div */}
        <div className="h-40 w-full bg-stone-100 text-center md:w-1/4">
          <LuMail className="text-[#35AFA0] mx-auto mt-4" size={30} />
          <p className="mt-4 mb-4 text-sm">info@example.com</p>
          <p className="text-sm font-light">
            Lorem ipsum dolar site amet discont
          </p>
        </div>
      </div>

      {/* third section */}
      <div className=" mx-auto mt-20 mb-40 h-auto w-[90%] md:w-3/4 border-none p-6 shadow-md">
        <div className="content-1 text-center">
          <h2 className="mt-20 mb-5 text-5xl font-bold">Send Us</h2>
          <p>
            Contact us for all your questions and opinions, or you can solve
            your problems in a shorter time with our contact <br /> offices.
          </p>
        </div>

        <hr className="mx-auto mt-6 w-3/4 text-indigo-100" />

        <form className="mt-6 w-full space-y-6">
          {/* Name and Email */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="flex-1">
              <label htmlFor="name" className="mb-1 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded border border-gray-300 bg-gray-100 p-3 focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded border border-gray-300 bg-gray-100 p-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="mb-1 block">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full rounded border border-gray-300 bg-gray-100 p-3 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-1 block">
              Your Message
            </label>
            <textarea
              placeholder="Your Message"
              className="h-40 w-full resize-none rounded border border-gray-300 bg-gray-100 p-3 focus:outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="">
            <button
              type="submit"
              className="bg-[#35AFA0] hover:bg-opacity-90 cursor-pointer rounded px-6 py-3 text-white transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
}
