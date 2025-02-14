import React, { useState } from 'react'

export default function PassportFaq() {


  const [openIndex, setOpenIndex] = useState(null); // State to track which accordion is open

  const faqData = [
    {
      id: 1,

      title: "What is a Passport?",
      content:
        "A Passport is an official travel document, issued by a country to a citizen of that country, allowing that person to travel abroad and re-enter the home country. It is valid for all means of international travel and is the primary form of identification. Inside the passport on the first page is the official identification page that contains your name, date of birth, place of birth, passport issue and expiry date and your officially affixed photo. The empty pages that follow are used for exit and entry stamps. Those empty pages are also used to stamp visas.",
    },
    {
      id: 2,

      title: "What is the Indian passport validity?",
      content:
        "The Indian passport validity is up to 10 years. For children up to the age of 15 years, the passport is issued with a validity of 5 years. Please note that the Passport Issuing Authority may issue passports even for a shorter duration under certain conditions.",
    },
    {
      id: 3,

      title: "What do I do if my passport pages have been utilized/exhausted?",
      content:
        "Indian passports are issued in two booklets i.e. 36-pages passport for regular travelers and 60-pages (jumbo) passport to accommodate frequent travelers. In the case of exhaustion of passport pages, you will need to apply for the reissue of passport.",
    },

    {
      id: 4,

      title: "Is it mandatory to attend the passport appointment in person?",
      content:
        "All applicants, including infants and children seeking passport or passport related services are required to be physically present at the time of making application at the Passport Seva Kendra (PSK) or the Post Office Passport Seva Kendra (POPSK) for submitting their application, biometrics (fingerprints) and photograph.",
    },

  ];

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>


      <div className=' flex flex-col gap-[20px]'>
        <div className=' flex font-[600] text-[25px] '>
          FAQ'S
        </div>


      <div className="flex md:w-[100%] w-[100%] flex-col gap-[20px]">
        {faqData.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col gap-[20px] p-[10px] md:p-[14px] rounded-tl-[15px]  rounded-br-[15px] custom-shadow1"
          >
            {/* Accordion Header */}
            <div
              className="flex w-[100%] justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-[20px]">

                <p className="flex font-[400] text-[15px] md:text-[16px]">
                  {item.title}
                </p>
              </div>
              <i
                className={`fa-solid fa-chevron-right text-center items-center text-[13px] md:text-[16px] flex transition-transform duration-300 ${openIndex === index ? "rotate-90" : "rotate-0"
                  }`}
              ></i>
            </div>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="flex font-[400] text-[12px] text-justify mt-[px]">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </>
  )
}
