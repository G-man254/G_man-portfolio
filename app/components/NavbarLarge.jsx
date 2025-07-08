import { Link } from "react-router";

export default function Navbar(){
    return (
        <main className="hidden lg:block">
            <nav className="bg-gradient-to-bl from-sky-300 to-sky-600">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </main>
    )
}
