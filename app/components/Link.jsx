import React from 'react'
import { Link } from "react-router"

export function Button({text, path}) {
  return (
    <div className='text-center'>
      <Link to={path} className="py-2 px-4 bg-[#2772A0] text-lg text-white hover:bg-[#CCDDEA] hover:text-[#2772A0] transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-400 mt-3 md:mt-5 lg:mt-10 xl:mt-20 block hover:ease-in w-[150px] rounded-lg lg:rounded-xl absolute left-[50%] -translate-x-1/2">{text}</Link>
    </div>
  )
}

