import React from 'react'
import { Link } from "react-router"

export function Button({text, path}) {
  return (
    <div className='text-center'>
      <Link to={path} className="py-2 px-4 bg-[#2772A0] text-lg text-white hover:bg-[#CCDDEA] hover:text-[#2772A0] transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-400 mt-10 md:mt-10 lg:mt-20 xl:mt-25 block hover:ease-in w-[150px] rounded-lg lg:rounded-xl">{text}</Link>
    </div>
  )
}

