import { Link } from "react-router";

export default function Navbar(){
    return (
        <main className="hidden lg:block relative">
            <nav className="bg-gradient-to-bl from-sky-300 to-sky-600 h-12 flex justify-end items-center px-10 gap-5">
                <Link to="/" className="hover:bg-sky-700 hover:rounded-sm hover:p-2 hover:font-bold relative hover:before:h-1 hover:before:-bottom-1 hover:before:absolute hover:before:bg-white hover:text-md hover:before:right-0 hover:before:left-0">Home</Link>
                <Link to="/About" className="hover:bg-sky-700 hover:rounded-sm hover:p-2 hover:font-bold relative hover:before:h-1 hover:before:-bottom-1 hover:before:absolute hover:before:bg-white hover:text-md hover:before:right-0 hover:before:left-0">About</Link>
                <Link to="/Projects" className="hover:bg-sky-700 hover:rounded-sm hover:p-2 hover:font-bold relative hover:before:h-1 hover:before:-bottom-1 hover:before:absolute hover:before:bg-white hover:text-md hover:before:right-0 hover:before:left-0">Projects</Link>
                <Link to="/Contact" className="hover:bg-sky-700 hover:rounded-sm hover:p-2 hover:font-bold relative hover:before:h-1 hover:before:-bottom-1 hover:before:absolute hover:before:bg-white hover:text-md hover:before:right-0 hover:before:left-0">Contact</Link>
            </nav>
        </main>
    )
}
