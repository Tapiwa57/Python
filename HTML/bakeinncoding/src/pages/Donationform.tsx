

import Link from "next/link";
import Image from "next/image";

export default function Donationform() {
    return(
    <section className="bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
          {/* Close icon */}
         <h2 className="text-2xl font-bold text-center text-indigo-900 mb-6">Request Product Donation</h2>
         <h3 className="text-center text-indigo-900">You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks&apos; notice to the date of your event</h3>
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
          <label htmlFor="orgAddress" className="block font-semibold text-gray-700 mb-1">Contact Person Position</label>
          <input type="text" id="orgAddress" name="orgAddress" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="residentTown" className="block font-semibold text-gray-700 mb-1">Organization&apos;s Resident Town</label>
          <input type="text" id="residentTown" name="residentTown" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="telephone" className="block font-semibold text-gray-700 mb-1">Organization Address</label>
          <input type="tel" id="telephone" name="telephone" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Contact Person&apos;s E-mail</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90">
          <label htmlFor="dateVisit" className="block font-semibold text-gray-700 mb-1">Date of Event</label>
          <input type="date" id="dateVisit" name="dateVisit" className="w-full p-2 border rounded bg-yellow-50" required/>
        </div>

        <div className="w-90 h-30">
          <label htmlFor="participants" className="block font-semibold text-gray-700 mb-1">Number of Attendants</label>
          <select id="participants" name="participants" className="w-full p-2 border rounded bg-yellow-50" required>
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="11-20">11-20</option>
            <option value="21-30">21-30</option>
            <option value="31+">31+</option>
          </select>
        </div>
        <div className="w-90 h-30">
          <label htmlFor="participants" className="block font-semibold text-gray-700 mb-1">What Product Are Specifically Looking For?</label>
          <select id="participants" name="participants" className="w-full p-2 border rounded bg-yellow-50" required>
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="11-20">11-20</option>
            <option value="21-30">21-30</option>
            <option value="31+">31+</option>
          </select>
        </div>
        <div className="w-90 h-30">
          <label htmlFor="participants" className="block font-semibold text-gray-700 mb-1">Intend Use of Donation</label>
          <select id="participants" name="participants" className="w-full p-2 border rounded bg-yellow-50" required>
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="11-20">11-20</option>
            <option value="21-30">21-30</option>
            <option value="31+">31+</option>
          </select>
        </div>
      </div>
      <button type="submit" className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded">PROCEED TO  NEXT STEP</button>
    </form>
  </div>
</section>
    );
}