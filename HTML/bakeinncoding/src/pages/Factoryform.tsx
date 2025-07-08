

import Link from "next/link";
import Image from "next/image";

export default function Factoryform() {
    return(
    <section className="bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
          {/* Close icon */}
         <h2 className="text-2xl font-bold text-center text-indigo-900 mb-6">Book A Factory Tour</h2>
        <form  id="factoryTourForm" className="space-y-6">
          <Link href="/"><button className=""><Image className="flex justify-end content-end ml-200 -mt-15 " src="/images/Group-23.png" alt="#" width={25} height={25}/></button></Link>
      <div className="flex justify-center content-center flex-wrap flex-row gap-10">
        <div className="w-90">
          <label htmlFor="orgName" className="block font-semibold text-gray-700 mb-1">Name of Organisation</label>
          <input type="text" id="orgName" name="orgName" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="contactName" className="block font-semibold text-gray-700 mb-1">Name of Contact Person</label>
          <input type="text" id="contactName" name="contactName" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="orgAddress" className="block font-semibold text-gray-700 mb-1">Organization Address</label>
          <input type="text" id="orgAddress" name="orgAddress" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="residentTown" className="block font-semibold text-gray-700 mb-1">Organization’s Resident Town</label>
          <input type="text" id="residentTown" name="residentTown" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="telephone" className="block font-semibold text-gray-700 mb-1">Contact Person’s Telephone</label>
          <input type="tel" id="telephone" name="telephone" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Contact Person’s E-mail</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="dateVisit" className="block font-semibold text-gray-700 mb-1">Date of Visit</label>
          <input type="date" id="dateVisit" name="dateVisit" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90 h-30">
          <label htmlFor="participants" className="block font-semibold text-gray-700 mb-1">Number of Participants</label>
          <select id="participants" name="participants" className="w-full p-2 border rounded bg-yellow-50" required>
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="11-20">11-20</option>
            <option value="21-30">21-30</option>
            <option value="31+">31+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="ageRange" className="block font-semibold text-gray-700 mb-1">Age Range of Participants</label>
        <select id="ageRange" name="ageRange" className="w-full p-2 border rounded bg-yellow-50" required>
          <option value="">Select</option>
          <option value="under-12">Under 12</option>
          <option value="13-18">13 - 18</option>
          <option value="19-25">19 - 25</option>
          <option value="26+">26+</option>
        </select>
      </div>

      <div className="text-center">
        <a href="#" className="text-indigo-800 font-semibold underline mx-2">Terms & Conditions</a>
        <a href="#" className="text-indigo-800 font-semibold underline mx-2">Safety Regulations</a>
      </div>

      <div className="flex items-start space-x-2">
        <input type="checkbox" id="agree" name="agree" className="mt-1"/>
        <label htmlFor="agree" className="text-gray-700">Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.</label>
      </div>

      <div className="flex items-start space-x-2">
        <input type="checkbox" id="safety" name="safety" className="mt-1"/>
        <label htmlFor="safety" className="text-gray-700">Have Read The Safety Regulations</label>
      </div>

      <button type="submit" className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded">SUBMIT</button>
    </form>
  </div>
</section>
    );
}