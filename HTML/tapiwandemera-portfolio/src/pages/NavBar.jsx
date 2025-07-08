import Link from "next/link"

export default function NavBar(){
    return(
        <div >
            <nav className=" flex justify-center align-centre gap-6.5 p-6">
                <Link href="/">Home</Link>
                <Link href="/Projects">Projects</Link>
                <Link href="/AboutMe">About Me</Link>
                <Link href="/ContactMe">Contact Me</Link>
            </nav>
        </div>
        

    );
}