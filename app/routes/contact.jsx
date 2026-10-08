// import { main } from 'framer-motion/client'
// import React from 'react'

// export default function contact() {
//   return (
//     <main className='bg-gray-900'>
//       <div className='place-items-center pt-8'>
//         <img src="images/portfolio.jpeg" alt="G-man254" className="w-[150px] h-[150px] object-cover rounded-4xl lg:w-[150px] lg:h-[150px] border-2 lg:rounded-[50%]"/>
//         <p className='mt-8 text-5xl font-bold'>Get in touch</p>
//       </div>
//       <div className="flex justify-center items-center min-h-[500px] px-4">
//         <form className="w-full max-w-lg bg-gray-100 p-8 rounded-2xl shadow-xl space-y-6">
//           <div className="relative">
//             <input
//               type="text"
//               id="name"
//               required
//               className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               placeholder="Your Name"
//             />
//             <label
//               htmlFor="name"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-sm"
//             >
//               Your Name *
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               id="email"
//               required
//               className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               placeholder="Your Email"
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-sm"
//             >
//               Your Email *
//             </label>
//           </div>

//           <div className="relative">
//             <textarea
//               id="message"
//               required
//               rows="4"
//               className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               placeholder="Your Message"
//             ></textarea>
//             <label
//               htmlFor="message"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-sm"
//             >
//               Your Message *
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 hover:scale-95 transition duration-300 shadow-md"
//           >
//             Send Message
//           </button>
//         </form>
//     </div>
//     </main>
//   )
// }

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for reaching out!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 px-4 py-16 text-white">
      {/* Header */}
      <section className="mx-auto max-w-3xl text-center">
        <img
          src="/images/portfolio.jpeg"
          alt="G-man254"
          className="mx-auto h-[150px] w-[150px] rounded-full border-2 border-gray-700 object-cover shadow-lg"
        />

        <h1 className="mt-8 text-4xl font-bold sm:text-5xl">
          Get in touch
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          Have a project in mind, an opportunity, or simply want to
          connect? Feel free to send me a message. I'd love to hear from
          you.
        </p>
      </section>

      {/* Contact form */}
      <section className="mx-auto mt-12 max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-gray-100 p-6 shadow-2xl sm:p-8"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me a little about your project..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Status message */}
          {status.message && (
            <div
              className={`rounded-lg p-4 text-sm ${
                status.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* Direct contact */}
      <section className="mx-auto mt-10 text-center">
        <p className="text-gray-400">
          Or email me directly at
        </p>

        <a
          href="mailto:d.kariuki.dev@gmail.com"
          className="mt-2 inline-block font-medium text-blue-400 hover:text-blue-300"
        >
          d.kariuki.dev@gmail.com
        </a>
      </section>
    </main>
  );
}