import * as React from 'react';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


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
export default function Products(){
    const [value, setValue] = React.useState(0);
        
          const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
          };
    return(
        
        <section>

            <div>
                <div className= "flex justify-evenly  gap-170 max-w-full mt-0.5 ml-8 mr-8 py-100"style={{backgroundPosition:"center", backgroundSize:"cover",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%),url(/images/Rectangle-347.png)", borderRadius: "10px"}}>
                <h1 className="text-white text-7xl font-extrabold" style={{position:"relative" ,top:"370px", left:"-50px"}}>Our Product Range</h1>
                <Image className="" style={{position:"relative" ,top:"355px", left:"30px"}} src="/images/Group-300.png" alt="facebook" width={100} height={100}/>
                
                </div>
            </div>
            <div className="flex max-w-full justify-center py-50 text-blue-950"  style={{flexDirection:"column", alignContent:"center",marginTop:"25px"}}>
                  <h1 className="text-5xl font-extrabold mb-40 flex justify-center" style={{}}>Our Products</h1>
                  <div>
                    <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                      <Tab label="Bread" {...a11yProps(0)} sx={{ fontSize: '2.0rem', fontWeight: 'bold', color:"hsla(248, 60%, 26%, 1)", opacity:"50%", '&:hover': {
                  opacity: 1,
                  color: 'hsla(248, 60%, 26%, 1)',
                },}} />
                      <Tab label="Meat Pies" {...a11yProps(1)} sx={{ fontSize: '2.0rem', fontWeight: 'bold', color:"hsla(248, 60%, 26%, 1)", opacity:"50%" ,'&:hover': {
                  opacity: 1,
                  color: 'hsla(248, 60%, 26%, 1)',
                },}} />
                      <Tab label="Scones" {...a11yProps(2)} sx={{ fontSize: '2.0rem', fontWeight: 'bold', color:"hsla(248, 60%, 26%, 1)", opacity:"50%", '&:hover': {
                  opacity: 1,
                  color: 'hsla(248, 60%, 26%, 1)',
                }, }}/>
                    <Tab label="Donuts" {...a11yProps(2)} sx={{ fontSize: '2.0rem', fontWeight: 'bold', color:"hsla(248, 60%, 26%, 1)", opacity:"50%", '&:hover': {
                  opacity: 1,
                  color: 'hsla(248, 60%, 26%, 1)',
                }, }}/>
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                  <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
                    <div className=" flex justify-center content-center flex-col text-center bg-[hsla(40,40%,50%,1)] h-200" style={{border:"0px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image className="ml-9"src="/images/Rectangle-3520.png" alt="About1" width={400} height={400}></Image>
                      <h1 className="text-5xl font-extrabold mb-0 p-1">Premium Soft <br /> White loaf</h1>
                      <p className=" text-2xl font-extralight p-5">Our Premium Soft loaves are <br /> delightfully soft, fresh and delicious. They are <br /> loaded with energy and fortified with vitamins <br /> and mineral for the classic everyday bread. <br /> The Standard Loaf has 18 slices.</p>
                    </div>
                   <div className="flex justify-center content-center flex-col text-center bg-[hsla(40,40%,50%,1)] h-200" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image className="ml-25" src="/images/Rectangle-3540.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-5xl font-extrabold mb-0 p-1">Family Loaf High <br /> Energy Brown</h1>
                      <p className=" text-2xl font-extralight p-5">Our Premium Soft loaves are <br /> delightfully soft, fresh and delicious. They are <br /> loaded with energy and fortified with vitamins <br /> and mineral for the classic everyday bread. <br /> The Standard Loaf has 18 slices.</p>
                  </div>
                   <div className="flex justify-center content-center flex-col text-center bg-[hsla(40,40%,50%,1)] h-200" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image className="ml-25" src="/images/Rectangle-3570.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-5xl font-extrabold mb-0 p-1">Family Loaf High <br /> Energy Brown</h1>
                      <p className=" text-2xl font-extralight p-5">Our Premium Soft loaves are <br /> delightfully soft, fresh and delicious. They are <br /> loaded with energy and fortified with vitamins <br /> and mineral for the classic everyday bread. <br /> The Standard Loaf has 18 slices.</p>
                  </div>
                  </div>
                  
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                  <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                    </div>
                   <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                  </div>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold" >Serves: 6 people</p>
                    </div> 
                  </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                  <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359-2.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                    </div>
                   <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359-2.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                  </div>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359-2.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold" >Serves: 6 people</p>
                    </div> 
                  </div>
                  </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                  <div className="flex justify-center flex-wrap gap-10" style={{alignContent:"center",}}>
                    <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359-4.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                    </div>
                   <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359-3.png" alt="About1" width={300} height={300}></Image>
                      <h1 className="text-3xl font-extrabold mb-8">Shwarma Sandwich</h1>
                      <p className="font-bold">Prep time: 20min</p>
                      <p className="font-bold">Serves: 6 people</p>
                  </div>
                <div className="" style={{border:"1px solid ", padding:"10px", borderRadius:"10px"}}>
                      <Image src="/images/Rectangle-359-4.png" alt="About1" width={300} height={300}></Image>
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