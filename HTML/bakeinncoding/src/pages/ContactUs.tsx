import Image from "next/image";


export default function ContactUs(){
    return(
        <section>
            <div>
                 <div className= "flex justify-evenly  gap-280 max-w-full mt-0.5 ml-8 mr-8 py-100"style={{backgroundPosition:"center", backgroundSize:"cover",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%) ,url(/images/Rectangle-32.png)", borderRadius: "10px"}}>
                    <h1 className="text-white text-7xl font-extrabold" style={{position:"relative" ,top:"400px", left:"32px"}}>Contact Us</h1>
                    <Image className="" style={{position:"relative" ,top:"400px", left:"32px"}} src="/images/Group-300.png" alt="facebook" width={100} height={100}/>
                </div>
            </div>
            <div className="text-blue-950 flex justify-center content-center flex-wrap flex-col p-20"  >
                <div className="text-blue-950 flex justify-center content-center flex-wrap flex-row gap-20">
                    <div className="flex flex-col gap-5">
                        <Image src="/images/Rectangle-66900.png" alt="#" width={700} height={300}/>
                        <h1 className="text-4xl font-extrabold">Harare Bread Factory</h1>
                        <p className="text-2xl">1 Shepperton Road, Graniteside, Harare</p>
                        <p className="text-2xl">+263 242 710334, +263 242 751481 <br /> +263 242 751572 , +263 242 758659</p>
                        <p className="text-2xl">VOIP: 08677006178</p>
                        <p className="text-2xl">Econet Toll Free: 08080151, 08080152</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Image src="/images/Rectangle-671000.png" alt="#" width={700} height={300}/>
                        <h1 className="text-4xl font-extrabold">Bulawayo Bread Factory</h1>
                        <p className="text-2xl">22 A Bellevue Road, Belmont, Bulawayo</p>
                        <p className="text-2xl">+263 9 78279, +263 9 68826, +263 9 68381,  <br /> ++263 9 68383, +263 9 69592, +263 9 76693</p>
                        <p className="text-2xl">VOIP: 08677006179</p>
                        <p className="text-2xl">Econet Toll Free: 08080151, 08080152</p>
                    </div>
                </div>
            </div>
            <div className="text-blue-950 flex justify-center content-center flex-col mb-30">
                <h1 className="text-5xl font-extrabold text-center p-20">List Of Baker&apos;s Inn Depots</h1>
                <div className="flex justify-center flex-row gap-20 border-t-4 border-gray-600 w-300 max-w-full ml-125">
                    <div>
                        <h2 className="text-2xl font-extrabold p-5">Depot</h2>
                        <p className="text-2xl">Chinhoyi Depot <br />Bindura Depot <br />Murehwa Depot <br />Mutare Depot <br /> <br /> <br />Hwange Depot <br />Chiredzi Depot <br />Masvingo Depot <br />Gweru Depot <br />Zvishavane Depot</p>
                    </div>
                    <div className="border-l-4 border-gray-600">
                        <h2 className="text-2xl font-extrabold p-5">Address</h2>
                        <p className="text-2xl">94/95 Josiah Tongogara St, Industrial Site, Chinhoyi <br />461 Luton Road, Industrial Site, Bindura <br />Stand number 351 Murehwa Growth Point <br />5-7 Glasgow Road, Industrial Site, Mutare <br /><br /><br />29 Derby Drive, Hwange Industrial Site <br />329 Lion Drive, Chiredzi <br />1310 Mineral Road, Masvingo <br />1843 Main Street, Gweru <br />Shabanie Mine Club, Noelville, Zvishavane</p> 
                    </div>
                    <div className="border-l-4 border-gray-600">
                        <h2 className="text-2xl font-extrabold p-5">Phone Number</h2>
                        <p className="text-2xl font-bold">0772 318 309 <br/>066 2107317 <br />0652 122 514 <br/>020 60715 <br /> <br /> <br />0281 2820105 <br />0231 231 2709 <br />039 266 333<br />054 2220 858 <br />0772 395567</p> 
                    </div>
                </div>
            </div>
            <div className="text-blue-950 flex justify-center content-center flex-wrap flex-col">
                <Image src="/images/Rectangle-310.png" alt="#" width={1600} height={10}/>
                <div className="flex justify-center gap-100 p-20">
                    <div>
                        <h2 className="text-2xl font-extrabold">For job enquiries , email your CV to</h2>
                        <a className="text-2xl" href="#">hr@bakersinnzim.com</a>
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold">For general enquiries, email</h2>
                        <a className="text-2xl" href="#">marketing@bakersinnzim.com</a>
                    </div>
                </div>
                
            </div>
<div className="bg-white text-gray-900">

  <div className="max-w-3xl mx-auto px-4 py-10">
    <h1 className="text-4xl font-bold text-center text-blue-950 mb-2">Request A Callback</h1>
    <p className="text-center text-gray-600 mb-8">Complete the form below and we will respond within 24 hours.</p>

    <form className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">Your Title</label>
          <select id="title" name="title" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2">
            <option>Select your title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Dr</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2"/>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Your Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder="Your Phone Number" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Your E-Mail</label>
          <input type="email" id="email" name="email" placeholder="Your E-Mail" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2"/>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="interest">Select Area Of Interest</label>
        <select id="interest" name="interest" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2">
          <option>Select Area Of Interest</option>
          <option>Product Information</option>
          <option>Support</option>
          <option>Sales</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="nature">Nature Of Enquiry</label>
        <select id="nature" name="nature" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2">
          <option>Select Nature Of Enquiry</option>
          <option>General Question</option>
          <option>Complaint</option>
          <option>Request Information</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="contactByPhone">Do You Want To Be Contacted By Phone</label>
        <select id="contactByPhone" name="contactByPhone" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2">
          <option>Select an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows={6} placeholder="Your Message" className="block w-full border border-gray-300 rounded bg-yellow-50 px-3 py-2"></textarea>
      </div>

      <button type="submit" className="w-full bg-yellow-700 text-white font-semibold uppercase py-3 rounded hover:bg-yellow-800 transition">
        Submit
      </button>
    </form>
  </div>

</div>



        </section>

    );
}