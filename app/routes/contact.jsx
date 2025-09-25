import { main } from 'framer-motion/client'
import React from 'react'

export default function contact() {
  return (
    <main className='bg-gray-900'>
      <div className='place-items-center pt-8'>
        <img src="images/portfolio.jpeg" alt="G-man254" className="w-[150px] h-[130px] rounded-4xl lg:w-[150px] lg:h-[150px] border-2 lg:rounded-[50%]"/>
        <p className='mt-8 text-5xl font-bold'>Get in touch</p>
      </div>
      <div className="flex justify-center items-center min-h-[500px] px-4">
        <form className="w-full max-w-lg bg-gray-100 p-8 rounded-2xl shadow-xl space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              required
              className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-sm"
            >
              Your Name *
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-sm"
            >
              Your Email *
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              required
              rows="4"
              className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-sm"
            >
              Your Message *
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
    </div>
    </main>
  )
}
