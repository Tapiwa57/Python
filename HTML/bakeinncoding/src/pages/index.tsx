
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";


//About Baker Inn
import About1 from "../../public/images/Rectangle 337.png"
import About2 from "../../public/images/Rectangle-337-1.png" 
import About3 from "../../public/images/Rectangle 337-2.png"
import About4 from "../../public/images/Rectangle-16.png" 



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <section>
      <div className="flex justify-center flex-wrap max-w-full mt-0.5 mx-8 sm:py-20 md:py-13 lg:py-50 rounded-[10px]"
      style={{
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: "url(/images/heross.png)",
  }}
>
  <div className="text-white flex  flex-col sm:ml-0 md:ml-[-450px] lg:ml-[-960px]">
    <h1 className="mb-5 font-extrabold text-4xl sm:text-5xl md:text-2xl lg:text-7xl">
      Bringing you the <br />best value at the <br />best prices
    </h1>
    <p className="text-5xl sm:text-xl md:text-3xl mb-5">
      The freshest sandwiches you can make are <br />with Baker’s inn soft white loaf.
    </p>
    <button
      className="border-0 text-lg sm:text-1xl md:text-1xl px-10 font-bold w-60 h-20 mt-5"
      style={{ background: "hsla(40, 40%, 50%, 1)" }}
    >
      READ MORE
    </button>
  </div>
</div>

<div className="flex flex-col md:flex-row max-w-full justify-center items-center md:items-start md:gap-60 gap-20 py-48 text-blue-950">
  <div className=" flex content-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-extrabold">About Us Baker's Inn</h1>
  </div>
  <div className="text-lg md:text-3xl text-center md:text-left max-w-prose">
    <p>
      It all started back in the eighties when Baker's Inn was just a small <br /> 
      confectionery company that employed 40 people and produced <br />
      30,000 loaves a day. We now aim to provide a nourishing, convenient <br />
      and accessible answer to hunger's call.
    </p>
    <Link href="/AboutUs">
      <button
        className="border-0 text-lg md:text-2xl text-white font-bold px-6 md:px-8 py-3 md:py-4 mt-5"
        style={{ background: "hsla(40, 40%, 50%, 1)" }}
      >
        READ MORE
      </button>
    </Link>
  </div>
</div>

<div className="flex justify-center flex-wrap max-w-full gap-5 mb-36 mt-25 px-4">
  <Image src={About1} alt="About1" className="w-full sm:w-64 md:w-80 lg:w-[420px] h-auto" />
  <Image src={About2} alt="About2" className="w-full sm:w-64 md:w-80 lg:w-[420px] h-auto" />
  <Image src={About3} alt="About3" className="w-full sm:w-64 md:w-80 lg:w-[420px] h-auto" />
  <Image src={About4} alt="About4" className="w-full sm:w-64 md:w-80 lg:w-[420px] h-auto" />
</div>

   <div className="flex flex-col items-center bg-gray-100 max-w-full px-4 py-16">
  <h1 className="text-center font-extrabold text-4xl sm:text-5xl text-blue-950 mb-12">
    Our Product Range
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mb-12">
    {[
      { title: "Bread", img: "/images/Rectangle-16.png" },
      { title: "Meat Pies", img: "/images/Rectangle-14.png" },
      { title: "Scones", img: "/images/Rectangle-2611.png" },
      { title: "Donuts", img: "/images/Rectangle-280.png" }
    ].map((item) => (
      <div
        key={item.title}
        className="relative rounded-lg overflow-hidden h-72 sm:h-80 md:h-96"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%), url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="absolute bottom-6 left-6 text-3xl sm:text-4xl font-black text-white">
          {item.title}
        </h1>
      </div>
    ))}
  </div>

  <Link href="/Products">
    <button
      className="font-extrabold text-4xl text-white px-10 py-8 rounded-lg"
      style={{ background: "hsla(40, 40%, 50%, 1)" }}
    >
      VIEW COMPLETE RANGE
    </button>
  </Link>
</div>

<div className="flex flex-col md:flex-row items-center justify-center max-w-full gap-12 px-4 py-16 text-blue-950">
  {}
  <div className="md:w-1/2 flex flex-col">
    <h1 className="text-3xl sm:text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
      Book A Factory Tour
    </h1>
    <p className="text-lg sm:text-1xl md:text-3xl mb-0 text-center md:text-left leading-relaxed">
      Keen on seeing how Baker's Inn products are made? Are <br />
      you interested in a field trip day for your school's class? <br />
      Get in touch with us to book a tour of our factory that is <br />
      closest to you. Fill in the booking form and we will get back to you.
    </p>
    <Link href="/Factoryform">
      <button
        className="text-white text-lg sm:text-xl md:text-3xl font-bold px-6 md:px-5 py-3 md:py-4 mt-4 rounded-lg hover:bg-yellow-700 transition"
        style={{ background: "hsla(40, 40%, 50%, 1)" }}
      >
        BOOK FACTORY TOUR
      </button>
    </Link>
  </div>

  {}
  <div className="md:w-280">
    <Image
      src="/images/Rectangle-32.png"
      alt="Factory1"
      width={800}
      height={300}
      className="w-full h-auto rounded-lg"
    />
  </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center max-w-full gap-45 px-4 py-16 text-blue-950 bg-gray-100">
  {}
  <div className="md:w-280">
    <Image
      src="/images/Rectangle-31-2.png"
      alt="Factory1"
      width={800}
      height={300}
      className="w-full h-auto rounded-lg"
    />
  </div>

  {}
  <div className="md:w-1/2 flex flex-col  md:items-start  md:text-left">
    <h1 className="text-5xl sm:text-2xl md:text-5xl font-extrabold mb-6">
      Request A Donation
    </h1>
    <p className="text-lg sm:text-1xl md:text-3xl mb-6 leading-relaxed">
      If you are holding an event that you wish to have us <br />
      donate to, we're more than glad to help. Fill in <br />
      donation request form for us to best understand how we <br />
      can increase your event's impact in the local community.
    </p>
    <Link href="/Donationform">
      <button
        className="text-white text-lg sm:text-xl md:text-2xl font-bold px-6 md:px-10 py-3 md:py-4 mt-4 rounded-lg hover:bg-yellow-700 transition"
        style={{
          background: "hsla(40, 40%, 50%, 1)"
        }}
      >
        REQUEST DONATION
      </button>
    </Link>
  </div>
</div>
<div
  className="flex flex-col items-center justify-center max-w-full mt-0.5 mx-8 rounded-2xl py-24 sm:py-32 md:py-200 text-center "
  style={{
    backgroundImage: "url(/images/Hero2.png)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <p className="text-white text-md sm:text-1xl md:text-3xl max-w-2xl mb-6 px-4 ml-280 -mt-100">
    Let your children join the fun. Explore a place <br className="hidden sm:block" />
    with exciting games and the top winners stand a <br className="hidden sm:block" />
    chance to win exciting monthly prizes!
  </p>
  <Link href="/Kidscorner">
    <button
      className="text-white font-extrabold text-md sm:text-xl md:text-3xl px-20 py-5 rounded-lg hover:bg-red-600 transition ml-290"
      style={{
        backgroundColor: "hsla(355, 100%, 64%, 1)"
      }}
    >
      PLAY GAMES
    </button>
  </Link>
</div>

    <div className="flex max-w-full justify-center py-50 text-blue-950"  style={{flexDirection:"column", alignContent:"center",marginTop:"-250px"}}>
      <Link href="/Recipes"><h1 className="text-5xl font-extrabold mb-40 flex justify-center" style={{}}>Baker's Recipes</h1></Link>
      <div>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="For Kids" {...a11yProps(0)} sx={{ fontSize: '2.0rem', fontWeight: 'bold', color:"hsla(248, 60%, 26%, 1)", opacity:"50%", '&:hover': {
      opacity: 1,
      color: 'hsla(248, 60%, 26%, 1)',
    },}} />
          <Tab label="For Vegans" {...a11yProps(1)} sx={{ fontSize: '2.0rem', fontWeight: 'bold', color:"hsla(248, 60%, 26%, 1)", opacity:"50%" ,'&:hover': {
      opacity: 1,
      color: 'hsla(248, 60%, 26%, 1)',
    },}} />
          <Tab label="For Family" {...a11yProps(2)} sx={{ fontSize: '2.0rem', fontWeight: 'bold', color:"hsla(248, 60%, 26%, 1)", opacity:"50%", '&:hover': {
      opacity: 1,
      color: 'hsla(248, 60%, 26%, 1)',
    }, }}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
        <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About1} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
          
        </div>
       <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About1} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
      </div>
        <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About1} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
        </div> 
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
        <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About2} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Sweet Shortbread</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
        </div>
       <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About2} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Sweet Shortbread</h1>
          <p className="font-bold"><span className="text-black">Prep time:</span> 20min</p>
          <p className="font-bold">Serves: 6 people</p>
      </div>
        <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About2} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Sweet Shortbread</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
        </div> 
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
        <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About3} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Salmon Strips</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
        </div>
       <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About3} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Salmon Strips</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
      </div>
        <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
          <Image src={About3} alt="About1" width={0} height={0}></Image>
          <h1 className="text-3xl font-extrabold mb-8">Salmon Strips</h1>
          <div className="flex justify-between">
            <div>
              <p className=""><span className="font-extrabold ">Prep time: </span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">20min</span></p>
              <p className=""> <span className="font-extrabold ">Serves:</span> <span className="font-extrabold text-[hsla(40,40%,50%,1)]">6 people</span></p>
            </div>
            <div>
              <Link href="/Menu"><Image src="/images/Group-22.png" alt="#" width={60} height={60}/></Link>
            </div>
          </div>
        </div> 
      </div>
      </CustomTabPanel>
    </Box> 
      </div>
    </div>
    <div className=" flex ml-8 mr-8 mb-40 max-w-full"style={{backgroundPosition:"centre", backgroundSize:"cover", backgroundImage:"url(/images/Gold.png)", padding:"290px", borderRadius:"20px"}}>
      <div className="" style={{marginLeft:"-290px", marginTop:"-80px"}}>
        <h1 className="text-6xl font-extrabold flex justify-center text-white" >Get Notification About  <br/>Promotions We Offer</h1>
      <form className="flex w-full ml-20 mt-20">
         <input className="flex p-4 border-0 w-150 h-25 bg-[#f3f3f2]" style={{borderRadius: "5px 0px 0px 5px", fontSize:"16px", outline:"none"}} type="email" placeholder="your email" required/>
        <button className="bg-[#2e1a63] text-[#fff] border-0 font-bold cursor-pointer hover:bg-[#42298c] w-60" style={{borderRadius: "0px 10px 10px 0px" }} type="submit">SUBMIT</button>
      </form>
      </div>
      
    </div>
    </section>

  );
}
