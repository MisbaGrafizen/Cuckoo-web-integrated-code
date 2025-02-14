import React, { useState } from 'react'

export default function Document() {
    const [isExpanded, setIsExpanded] = useState(true)  



    return (
        <>


            <div className=" w-[100%] mx-auto ">
                <h1 className="text-2xl font-bold mb-4">Documents Required for Applying Passport Online</h1>

                <div className="border rounded-lg">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full px-4 py-[16px] text-left flex justify-between items-center bg-gray-50"
                    >
                        <span className=' flex text-[16px]'>List of documents for fresh passport application</span>
                        <i className= {isExpanded ? "fa-solid fa-chevron-down " : "fa-solid fa-chevron-right"}></i>
                    </button>

                    {isExpanded && (
                        <div className="p-4 space-y-6">
                            {/* Proof of Present Address Section */}
                            <section>
                                <h2 className="font-semibold mb-4">1. Proof of Present Address (any one of the below documents)</h2>
                                <ul className="list-disc pl-6 text-[14px] leading-[20px] space-y-3">
                                    <li>Aadhaar Card</li>
                                    <li>
                                        Bank Passbook (Scheduled Public Sector Banks, Scheduled Private Sector Indian Banks and Regional Rural
                                        Banks only)
                                    </li>
                                    <li>Election Commission Photo ID (Voter ID)</li>
                                    <li>Driving License</li>
                                    <li>Electricity bill (should not be older than 3 months)</li>
                                    <li>Landline or postpaid mobile bill (should not be older than 3 months)</li>
                                    <li>Water bill (should not be older than 3 months)</li>
                                    <li>Proof of Gas Connection</li>
                                    <li>
                                        Valid Rent Agreement (notarized copy of the main page of lease which has the address or signature
                                        page)
                                    </li>
                                    <li>Ration Card</li>
                                    <li>Income Tax Assessment Order</li>
                                    <li>Certificate from Employer on letter head of reputed company</li>
                                    <li>Birth certificate of child along with Parent's passport copy (In case of minors)</li>
                                    <li>
                                        Spouse's passport copy (First and last page including family details mentioning applicant's name as
                                        spouse of the passport holder, provided the applicant's present address matches the address mentioned
                                        in the spouse's passport)
                                    </li>
                                    <li>
                                        For college/university students: A letter from your institution on the institution letterhead
                                        explaining the exact address that you presently reside in.
                                    </li>
                                </ul>
                            </section>

                            {/* Proof of Date of Birth Section */}
                            <section>
                                <h2 className="font-semibold mb-4">2. Proof of Date of Birth (any one of the below documents)</h2>
                                <ul className="ist-disc pl-6 text-[14px] leading-[20px] space-y-3">
                                    <li>Birth Certificate</li>
                                    <li>School leaving Certificate/Matriculation Certificate (issued by the school last attended)</li>
                                    <li>
                                        Pension book/Pension payment order (in respect of retired government official) or copy of an extract
                                        of the service record of the applicant (in respect of Government official); (only acceptable if it has
                                        the precise date of birth of the applicant)
                                    </li>
                                    <li>Election Commission Photo ID (Voter ID)</li>
                                    <li>Aadhaar Card</li>
                                    <li>Driving License (only acceptable if it has the precise date of birth of the applicant)</li>
                                    <li>PAN Card</li>
                                    <li>
                                        A declaration given by the Head of the Orphanage/Child Care Home on their official letter head of the
                                        organization confirming the DOB of the applicant
                                    </li>
                                </ul>   
                            </section>

                            {/* Photographs Section */}
                            <section>
                                <h2 className="font-semibold mb-4">3. Photographs of size 51mm * 51mm with white background</h2>
                            </section>

                            {/* Please Note Section */}
                            <section>
                                <h2 className="font-semibold mb-4">Please note:</h2>
                                <ul className="list-disc pl-6 text-[14px] leading-[20px] space-y-3">
                                    <li>Address proof must match with the present address as per application.</li>
                                    <li>Providing the Aadhaar card will expedite the application process.</li>
                                    <li>
                                        For minor applicants: carry original and self-attested copies of parents passports, in case parents
                                        possess passport and documents can be attested by parents.
                                    </li>
                                </ul>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </>

    )
}
