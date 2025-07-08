import { IM_Fell_French_Canon } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../../public/images/pexels-harrun-muhammad-116282236-32467386.jpg"

function About(){
    return(
        <div>
            <h1 className="text-green-600 md:text-[#fff256] lg:text-blue-600">About Us</h1>
            <Link href="/Contact"><button className="border-4 p-2.5 hover:bg-green-400">Contact Us</button></Link>
            <div className=" flex justify-evenly align-centre flex-wrap md:flex gap-10.5 max-[100:">
                <Image src={Img1} alt="Pexels" width={300} height={800}></Image>
                <Image src={Img1} alt="Pexels" width={300} height={800}></Image>
                <Image src={Img1} alt="Pexels" width={300} height={800}></Image>
            </div>
                
        </div>

        

    );

}

export default About;