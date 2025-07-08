import Image from "next/image";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as React from 'react';
import Link from "next/link";


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
export default function Recipes(){
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
    return(
        <section>
            <div className="flex justify-center content-center flex-wrap flex-row text-blue-950 gap-20 max-w-full">
                <div className="-ml-7 flex justify-center content-between flex-wrap flex-col">
                    <h1 className="mb-5" style={{fontWeight:"900", fontSize:"60px"}}>The Finest of <br />Baker’s Tik Tok <br />Community Recipes</h1>
                    <p className="text-3xl mb-5">Make the finest croissants worthy of<Image  className="inline"src="/images/eiffel-tower1.svg" alt="tower" width={20} height={20}/> Paris from your <Image className="inline" src="/images/206841-1.svg" alt="tower" width={20} height={20}/> home <br />#Croissant #Zimbabwe #Paris #Baker’s_Inn</p>
                    <div className="flex gap-5">
                        <Image className="" src="/images/Frame-22222.png" alt="icon" width={30} height={30}/>
                        <h2 className="text-3xl mb-5 text-[hsla(40,40%,50%,1)] font-extrabold">@ The_Bakers_Inn</h2>
                    </div>
                </div>
                <div className="flex justify-evenly content-center flex-wrap flex-row max-w-full">
                    <div className="p-10">
                        < Image className="m-2 relative animate-shadowPulse animate-delay-0" style={{animationDelay:"0s"}} src="/images/Rectangle-718.png" alt="hero1" width={350} height={400}/>
                        <Image className="m-2  relative animate-shadowPulse animate-delay-1" style={{animationDelay:"1s"}} src="/images/Rectangle-719.png" alt="hero2" width={350} height={400}/>
                    </div>
                    <div>
                        <Image className="m-2 relative animate-shadowPulse animate-delay-2" style={{animationDelay:"2s"}}src="/images/Rectangle-720.png" alt="hero1" width={350} height={400}/>
                        <Image className="m-2 relative animate-shadowPulse animate-delay-3"style={{animationDelay:"3s"}} src="/images/Rectangle-721.png" alt="hero2" width={350} height={400}/>
                    </div>  
                </div>
            </div>
            <div className="flex max-w-full justify-center py-50 text-blue-950"  style={{flexDirection:"column", alignContent:"center",marginTop:"-90px"}}>
                  <Link href="/Recipes"><h1 className="text-7xl font-extrabold mb-40 flex justify-center" style={{}}>Baker's Recipes</h1></Link>
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
                      <p className="font-bold"><span className=""style={{color:"hsla(248, 60%, 26%, 1)"}}>Prep time: </span>20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                    </div>
                   <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About1} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                  </div>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About1} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold" >Serves: 6 people</p>
                    </div> 
                  </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                  <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About2} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                    </div>
                   <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About2} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                  </div>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About2} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold" >Serves: 6 people</p>
                    </div> 
                  </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                  <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About3} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                    </div>
                   <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About3} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                  </div>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src={About3} alt="About1" width={0} height={0}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold" >Serves: 6 people</p>
                    </div> 
                  </div>
                  </CustomTabPanel>
                </Box> 
                  </div>
                </div>
        </section>

    );
}