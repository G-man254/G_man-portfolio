import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform built with React and Node.js.',
    image: 'images/Promate ProPods High-Definition ANC TWS Earphones1.jpeg',
  },
  {
    title: 'Task Management App',
    description: 'A task management application developed using TypeScript and Redux.',
    image: 'images/redux todo app.png',
  },
  {
    title: 'Movie app',
    description: 'A movie application developed using Express and API for fetching data.',
    image: 'images/movie app.png',
  },
  {
    title: 'API Integration',
    description: 'Integration of third-party APIs using React and Axios.',
    image: 'images/weather app.png',
  },
];

const Portfolio = () => {
    return (
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className='text-center'>
                <motion.h1 
                    className="text-4xl font-bold mb-4"
                    initial={{ y: -30, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6 }}
                >
                    Welcome to my world of creativity
                </motion.h1>
        
                <motion.p 
                    className="text-xl mb-10 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Listed below are a few projects from my github. Feel free to check them out.
                </motion.p>

            </div>
  
          <section>
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <img src={project.image} alt={project.title} className="rounded mb-4 w-full mx-auto h-[200px] object-cover" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
  
          {/* <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300">
              I'm a passionate software developer with experience in crafting robust and scalable web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </section> */}
  
          <section className="mt-10 bg-gray-700 p-10 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Do you have an idea in mind? 'SAY IT, I MAKE IT.'</h2>
            <p className="text-gray-300 mb-5">Feel free to get in touch with me</p>
            <a href="/contact" className="text-blue-400 bg-sky-200 py-2 px-3 rounded-xl hover:bg-blue-400 hover:text-white">Contact me</a>
          </section>
        </div>
      </div>
    );
  };
  
  export default Portfolio;