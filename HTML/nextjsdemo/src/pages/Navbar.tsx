import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-amber-500 flex justify-around p-6.5">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
        </nav>

    );
}

export default Navbar;