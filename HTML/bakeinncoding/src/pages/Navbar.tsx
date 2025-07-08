import Link from "next/link";
import Image from "next/image";
import Bakerlogo from "../../public/images/bakers-inn-category 1.png";

export default function Navbar() {
  return (
    <header className="flex  justify-between py-10 px-10 sm:py-20 md:py-48 lg:py-15 text-blue-950 font-extrabold">
      <Link href="/">
        <Image src={Bakerlogo} alt="baker" width={150} height={150} priority />
      </Link>
      <nav className="flex flex-wrap justify-center gap-10 lg:gap-10 text-4xl ">
        <Link href="/AboutUs" className="hover:text-yellow-700 transition mt-10">About Us</Link>
        <Link href="/Products" className="hover:text-yellow-700 transition mt-10">Products</Link>
        <Link href="/Recipes" className="hover:text-yellow-700 transition mt-10">Recipes</Link>
        <Link href="/Kidscorner" className="hover:text-yellow-700 transition mt-10">Kid's Corner</Link>
        <Link href="/ContactUs">
          <button className="bg-yellow-700 text-white px-15 py-10 rounded hover:bg-yellow-800 transition">
            Contact Us
          </button>
        </Link>
      </nav>

      <div className="md:hidden">
       
      </div>
    </header>
  );
}
