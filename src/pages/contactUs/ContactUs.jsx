
import React, { useState } from "react";

import Header  from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";
import { ApiPost } from "../../helper/axios";


export default function ContactUs() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validationForm = () => {
    let newErrors = {};

    if(!formData.name.trim()) newErrors.name  = "Name is required.";
    if(!formData.email.trim()) newErrors.email  = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const sendContactForm = async () => {
    try {
      const response = await ApiPost("/contact-us", formData);
      console.log('response', response)
      if(response.data.data) {
        alert("Message sent successfully!");
      }
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error("Contact Form Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      sendContactForm();
    }
  };


  return (
    <>
    
    
      <section className=" w-[100%]  ">
      <Header />
        <div className=" 2xl:w-[1250px]   pt-[190px]  w-[100%] h-[100%] mx-auto">
          <div className=" md:w-[76%] relative mb-[30px] mx-auto bg-[] z-[1] flex flex-col  md150:w-[1200px]">

            <form  className="w-[100%] ] px-[20px] h-[100%]">
              <div className="w-[100%] mx-auto flex flex-col gap-[20px] md:gap-[40px]">
                <div className="w-[100%] justify-between  flex flex-col gap-[20px] md:flex-row">
                  <div className="md:w-[45%] gap-[29px] flex flex-col">
                    <div className="w-[100%] flex justify-between flex-col ">
                      <p className=" font-[600]     font-lucida-bright-regular text-[#005f94]  text-[30px]">
                        We would love to hear from you.
                      </p>
                      <p className="w-[100%]  text-[15px] md:text-[16px] font-lucida-bright-regular text-[#273338]">
                        Well, hello! We would love to hear from you! For product
                        questions and customer service inquiries, please feel
                        free to drop us an email.
                      </p>
                    </div>
                    <div className="border-[1px] bg-[#fff] shadow-lg py-[15px] px-[18px] rounded-[10px] mt-[13px] md:mt-[0px] gap-[7px] flex flex-col w-[100%]">
                      <div className="flex  gap-[20px] border-b-[1.5px] pb-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] text-[#005f94] fa-solid fa-phone-volume"></i>
                        <div>
                          <p className="font-[600] font-lucida-bright-regular  text-[17px]">
                            Customer Care Number
                          </p>
                          <p className="w-[100%]  text-[15px]  font-Roboto md:text-[14px] font-[400]font-lucida-bright-regular text-[#646464]">
                            +91 9876543210
                          </p>
                        </div>
                      </div>
                      <div className="flex  gap-[20px] border-b-[1.5px] pb-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] text-[#005f94] fa-solid fa-envelope"></i>
                        <div>
                          <p className="font-[600]  font-lucida-bright-regular text-[17px]">
                            Business inquiry
                          </p>
                          <p className="w-[100%]  text-[15px] md:text-[14px] font-[400] font-lucida-bright-regular  text-[#646464]">
                          mail@cuckootravels.com
                          </p>
                        </div>
                      </div>
                      <div className="flex  gap-[20px] border-b-[1.5px] pb-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] text-[#005f94] fa-solid fa-envelope"></i>
                        <div>
                          <p className="font-[600] font-lucida-bright-regular text-[17px]">
                            Customer care
                          </p>
                          <p className="w-[100%]  text-[15px] md:text-[14px] font-[400] font-lucida-bright-regular  text-[#646464]">
                          Help@cuckootravels.com
                          </p>
                        </div>
                      </div>
                      <div className="flex  gap-[20px]  pt-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] text-[#005f94] fa-solid fa-location-dot "></i>
                        <div>
                          <p className="font-[600] font-lucida-bright-regular  text-[17px]">
                            Company Info
                          </p>

                          <p className="w-[100%]  text-[15px] md:text-[14px] font-[400] font-lucida-bright-regular text-[#646464]">
                          813, B Wing, Om Decora 9 Square, Nana mauva road, St 9, beside Marwadi, Rajkot, Gujarat 360005
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div autoComplete='off' className="md:w-[45%] gap-[20px] border-[#005f94] border  bg-[#ffffff] rounded-[10px] shadow-lg p-[20px] md:p-[30px] mt-[20px] md:mt-[0px] flex flex-col">
                    <div className="flex w-[100%] justify-between gap-[20px] font-Poppins">
                      <div className="w-[49%] h-[40px]  flex flex-col rounded-[0px] border-b-[1px] border-[#005f94]">
                        <input
                          name="name"
                          
                          placeholder="Name"
                          autoComplete="new-name"
                          className="w-[100%] font-lucida-bright-regular outline-none   px-[px] h-[100%] border-none bg-transparent"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div className="w-[49%] h-[40px]   flex flex-col rounded-[0px] border-b-[1px] border-[#005f94]">
                        <input
                          name="email"
                         autoComplete='Email'
                          placeholder="Email"
                          className="w-[100%] outline-none font-lucida-bright-regular   h-[100%] border-none bg-transparent"
                          value={formData.email}
                          onChange={handleChange}
                          type="text"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex w-[100%] mb-[20px] justify-between gap-[20px] font-Poppins">
                      <div className="w-[49%] h-[40px]   font-lucida-bright-regular  flex flex-col rounded-[0px] border-b-[1px] border-[#005f94]">
                        <input
                          name="phone"
                          autoComplete='number'
                          placeholder="Number"
                          className="w-[100%] outline-none font-lucida-bright-regular  h-[100%] border-none bg-transparent"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          maxLength="10"
                        />
          
                      </div>
                      <div className="w-[49%] h-[40px] font-lucida-bright-regular   flex flex-col rounded-[0px] border-b-[1px] border-[#005f94]">
                        <input
                          name="subject"
                          autoComplete="off"
                          placeholder="Subject"
                          className="w-[100%] outline-none font-lucida-bright-regular h-[100%] border-none bg-transparent"
                          value={formData.subject}
                          onChange={handleChange}
                          type="text"
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-500">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-[100%] font-Poppins  border-[#005f94] border rounded-[10px] h-[130px] md:h-[160px]">

                      <textarea
                        name="message"
                        autoComplete="off"
                        placeholder="Message"
                        className="w-[100%] h-[100%] font-lucida-bright-regular border-none p-[10px] rounded-[10px] outline-none"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex justify-center bg-[#005f94] text-[#fff] mt-[10px] text-[#000] text-[18px] rounded-[6px] font-lucida-bright-regular  md:mx-0 py-[8px] w-[120px] font-[500] transition-transform duration-200 active:scale-95"
                      onClick={handleSubmit}
             
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
        </div>

      </section>
<Footer />
    </>
  );
}
