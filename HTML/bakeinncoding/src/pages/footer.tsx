import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
    <section>
        <div className="bg-[hsla(248,60%,26%,1)] flex justify-center text-white py-0 " style={{alignItems:"center", flexWrap:"wrap", flexDirection:"column"}}>
      <div className="flex">
        <Image className="flex justify-center m-0" src="/images/Group-13.png" alt="bakerinnlogo" width={130} height={200}/>
      </div>
      <div className="flex justify-evenly flex-wrap gap-60">
        <div className="flex justify-center"style={{alignContent:"center", flexWrap:"wrap", flexDirection:"column"}}>
          <h2 className="text-3xl font-extrabold mb-8">Instagram Feed</h2>
          <div className="flex gap-6">
            <Image src="/images/Rectangle-688.png" alt="bakerpost" width={150} height={150}/>
            <Image src="/images/Rectangle-689.png" alt="bakerpost" width={150} height={150}/>
            <Image src="/images/Rectangle-690.png" alt="bakerpost" width={150} height={150}/>
          </div>
          <div className="flex gap-3 py-5">
            <Image src="/images/Vector-twitter.svg" alt="twitter icon" width={32} height={32}/>
            <Image src="/images/akar-icons_facebook-fill.svg" alt="facebook icon" width={32} height={32}/>
            <Image src="/images/bi_linkedin.svg" alt="linkden" width={32} height={32}/>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold mb-8">Our Location</h2>
          <p className="text-2xl">1 Shepperton Road, <br />Graniteside, <br />Harare <br />Zimbabwe.</p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold mb-8">Get In Touch With Us</h2>
          <p className="text-2xl"><Image className="inline " src="/images/phone.svg" alt="#" width={20} height={20}/>08080151 <br />08080152 <br />+263 242 751 481 <br />+263 242 710 334 <br /> <Image className="inline" src="/images/envolop.svg" alt="#" width={20} height={20}/> marketing@bakersinnzim.com</p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold mb-8">Sitemap</h2>
          <Link href="/" className="flex mt-0 text-2xl">Home</Link>
          <Link href="/AboutUs" className="flex mt-0 text-2xl">About Us</Link>
          <Link href="/Products" className="flex mt-0 text-2xl">Products</Link>
          <Link href="/Recipes" className="flex mt-0 text-2xl">Recipes</Link>
          <Link href="/Kidscorner" className="flex mt-0 text-2xl">Kid's corner</Link>
          <Link href="/ContactUs"><button className="border-0 p-0 mt-0 text-2xl">Contacts Us</button></Link>
        </div>
      </div>
        <footer className="flex justify-center content-center flex-wrap flex-row gap-99 ml-0 text-2xl py-15">
         <div className=" flex  gap-8 -ml-40 ">
            <h2>Subsidiary of</h2>
             <Image className="-mt-8" src="/images/inscor_logo@2x 1.png" alt="inscorlogo" width={150} height={150}/>
            </div>
         <div className="-mr-40">
            <h2>Copyright © 2022 Bakers Inn. All rights reserved. Site by Sitemap Get In Touch With Us <span className="text-[hsla(40,40%,50%,1)]">NoWalls Pan African</span></h2>
         </div>
        </footer>
    </div>
    </section>
    );
}

         