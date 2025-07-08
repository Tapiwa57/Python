import Link from  "next/link"
import Image from "next/image";
import { Geist, Geist_Mono, Margarine } from "next/font/google";
import Arrow from "../../public/Images/emojione-monotone_bow-and-arrow.svg"
import Github from "../../public/Images/mdi_github.svg"
import figma from "../../public/Images/gg_figma.svg"
import Profile from "../../public/Images/Profile.svg"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className=" w-full h-screen text-white flex justify-evenly"style={{
    background: "linear-gradient(90deg, #174190 0%, #07132a 88%)",
  }}>
      <div className=""style={{margin:"150px -150px 0px -150px"}}>
        <h3 className="font-bold mb-5">Hi I am</h3>
        <h2 className="font-bold mb-5">Tapiwa Ndemera</h2>
        <h1 className="font-bold mb-5">UI/UX Designer</h1>
        <Image src={Arrow} alt="Arrow" width={90} height={90}/>
        <h1 className="font-bold mb-5">Frontend Developer</h1>
        <div className="flex mt-10 mb-10 gap-10">
          <Image src={Github} alt="Github" width={48} height={48}/>
          <Image src={figma} alt="figma" width={48} height={48}/>
        </div>
        <div className="flex gap-10 ">
          <Link href="/Projects"><button className="bg-white text-blue-950 font-bold p-5 w-50 h-18 rounded-2xl">View my Projects?</button></Link>
          <a href="#"><button className=" border-2 text-white font-bold p-5 w-50 h-18 rounded-2xl">Download CV</button></a>
        </div>
      </div>
      <div className="mt-40 mr-(-40)">
        <Image src={Profile} alt="Profile" width={261} height={299}/>
      </div>
      
    </div>
    
    

  );
}
