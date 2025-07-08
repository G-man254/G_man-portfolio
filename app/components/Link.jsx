import React from 'react'
import { Link } from "react-router"

export function Button({text, path}) {
  return (
    <div>
      <Link to={path} className="py-2 px-4 bg-[#2772A0] text-lg text-white hover:bg-[#CCDDEA] hover:text-[#2772A0]">{text}</Link>
    </div>
  )
}

