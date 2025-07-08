import Image from "next/image";

export default function AboutUs(){
    return(
        <section>
            <div>
                <div className= "flex justify-evenly  gap-280 max-w-full mt-0.5 ml-8 mr-8 py-100"style={{backgroundPosition:"center", backgroundSize:"cover",backgroundImage:"url(/images/Rectangle-3470.png)", borderRadius: "10px"}}>
                <h1 className="text-white text-7xl font-extrabold" style={{position:"relative" ,top:"400px", left:"32px"}}>About Us</h1>
                <Image className="" style={{position:"relative" ,top:"400px", left:"32px"}} src="/images/Group-300.png" alt="facebook" width={100} height={100}/>
                </div>
            </div>
            <div className="flex justify-center gap-10 m-20 py-50 px-50 max-w-full bg-[hsla(40,30%,50%,1)]"style={{ borderRadius:"10px" }} >
                <div className="flex gap-10 max-w-full">
                    <Image className="float-left" src="/images/Component-20.png" alt="mission-logo" width={125} height={125}/>
                    <div className="flex justify-center flex-wrap  text-blue-950 " style={{flexDirection:"column",}}>
                        <h1 className="text-5xl font-extrabold ">Our Mission</h1>
                        <br />
                        <p className="text-2xl">To sharpen our edge in the manufacture <br />and marketing  of quality  baked products.</p>
                    </div> 
                </div>
                 <div className="flex gap-10">
                    <Image className="float-left"src="/images/Component-30.png" alt="mission-logo" width={125} height={125}/>
                    <div className="flex justify-center flex-wrap" style={{flexDirection:"column", }}>
                        <h1 className="text-5xl font-extrabold  text-blue-950">Our Vision</h1>
                        <br />
                        <p className="text-2xl  text-blue-950">To provide a nourishing, convenient and  <br />accessible answer to hunger's calls </p>
                    </div> 
                </div>
            </div>
            <div className="flex justify-center max-w-full  text-blue-950 " style={{flexDirection:"column", alignItems:"center"}}>
                <h1 className="text-5xl font-extrabold p-30">Our Core Values</h1>
                <div className=" flex  justify-center flex-wrap gap-10">
                    <div className="flex justify-center flex-wrap flex-col text-center">
                        <Image src="/images/Rectangle-220.png" alt="Teamwork" width={500} height={500}/>
                        <h1 className="text-4xl font-extrabold p-5">Teamwork</h1>
                        <p className="text-2xl"> We set inspiring goals that we purse with <br /> passion, unity an focus. We support each other , <br /> build on our strengths and ensure  that every <br />player in our team contributes  fully. We play to <br />win and realise that synergy, communication <br /> alignment bind us together. </p>
                    </div>
                    <div className="flex justify-center flex-wrap flex-col text-center">
                        <Image src="/images/Rectangle-240.png" alt="Teamwork" width={500} height={500}/>
                        <h1 className="text-4xl font-extrabold p-5">Respect</h1>
                        <p className="text-2xl"> We build self-esteem by treating each other <br />fairly, communicating directly and respectfully. <br /> We have empathy, discipline and build on our <br />diversity as a source of strength, creativity and <br /> innovation. <br /> <br /> </p>
                    </div>
                    <div className="flex justify-center flex-wrap flex-col text-center">
                        <Image src="/images/Rectangle-260.png" alt="Teamwork" width={500} height={500}/>
                        <h1 className="text-4xl font-extrabold p-5">Integrity</h1>
                        <p className="text-2xl"> We uphold the highest professional and ethical <br />standards. We guard the reputation of our <br />brands. Our promises are bankable. <br />  <br /> <br /> <br /> </p>
                    </div>
                     <div className="flex justify-center flex-wrap flex-col text-center">
                        <Image src="/images/Rectangle-349.png" alt="Teamwork" width={500} height={500}/>
                        <h1 className="text-4xl font-extrabold p-5">Commitment</h1>
                        <p className="text-2xl"> We are accountable to our stakeholders and <br /> commit to deliver what we promise. We  <br />translate plans into actions; strategies into <br /> achievements and tangible returns. <br /> <br /> <br /></p>
                    </div>
                     <div className="flex justify-center flex-wrap flex-col text-center">
                        <Image src="/images/Rectangle-220.png" alt="Teamwork" width={500} height={500}/>
                        <h1 className="text-4xl font-extrabold p-5">Excellence</h1>
                        <p className="text-2xl"> We strive to be the best in our business. We  <br />improve all the time, in all aspects and <br /> passionately deliver at the highest level. We <br />offer superior value and present our offering <br /> with pride. <br /> <br /></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center  flex-wrap flex-col content-center text-blue-950">
                <div className="flex justify-center gap-10 ">
                    <div>
                        <Image src="/images/Rectangle-31-1.png" alt="Quality" width={750} height={800}/>
                    </div>
                    <div className="">
                        <h1 className="text-4xl font-extrabold pb-10 pt-10">PROMISE QUALITY</h1>
                        <p className="text-2xl pb-5">Thank you for visiting our website. At Baker&apos;s Inn, we are committed to delivering <br />quality premium bread to our customers. We work with a team of over 1500 <br /> employees nationwide. Our aim is to uphold the highest ethical standards and <br /> perpetuate excellence in the delivery of our products. For us at Baker&apos;s Inn, we aim to <br /> improve the accessibility of our bread. We are accountable to our stakeholders to <br /> deliver what we promise.</p>
                        <p className="text-2xl pb-5">We translate plans into actions; dreams into reality; strategies into achievements and <br />tangible returns. We strive to be the best in our business and in our partnerships. We <br /> are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe <br />who stock or consume our nourishing bread throughout Zimbabwe. We have built <br />your top-quality brand and continue to grow as a company because of you. Thank you for <br /> your continued support of our brand.</p>
                        <p className="text-2xl pb-5 ">We set inspiring goals that we pursue with passion, unity and focus. We support each <br />other, build on our strengths and ensure that every player in our team contributes  <br />fully. We play to win and realise that synergy, communication and alignment bind us <br /> together.</p>
                    <div className="flex justify-center gap-10 p-20">
                    <h1 className="text-3xl pb-5 font-extrabold">C.E.O:</h1>
                    <Image className="relative -top-16" src="/images/Ngoni-Mazango.png" alt="Signature" width={350} height={350}/>
                    </div>
                </div>
                    
                </div>

            </div>
        </section>
    );
}