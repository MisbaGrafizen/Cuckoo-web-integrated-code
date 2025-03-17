
import React, { useState } from 'react';
import {
    Modal as NextUIModal,
    ModalBody,
    ModalContent,
} from "@nextui-org/react";
import logo from "../../../public/Header/logo.png"
import image from "../../../public/heroSection/image1.jpg"
import { DatePicker } from 'antd';
import { ApiPost } from '../../helper/axios';

export default function TourInquiry({ isOpen, closeAndResetModal }) {
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [numberFocused, setNumberFocused] = useState(false);
    const [personFocused, setPersonFocused] = useState(false);
    const [addressFocused, setAddressFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phoneCode: '+91',
        phone: '',
        email: '',
        travelDate: null,
        count: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date, dateString) => {
        setFormData({ ...formData, travelDate: dateString });
    };


    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (!formData.name || !formData.phone || !formData.email || !formData.count || !formData.travelDate) {
            setError("All fields are required!");
            setLoading(false);
            return;
        }

        try {
            const response = await ApiPost('/admin/customer', formData);
            if (response.data.customer) {
                setSuccess("Inquiry submitted successfully!");
                setFormData({
                    name: '',
                    phoneCode: '+91',
                    phone: '',
                    email: '',
                    travelDate: null,
                    count: '',
                    address: '',
                    message: ''
                });
            } else {
                setError("Failed to submit inquiry. Try again!");
            }
        } catch (err) {
            setError("Error submitting inquiry. Please try again!");
        }

        setLoading(false);
    };

    return (
        <>
            <NextUIModal
                isOpen={isOpen}
                onOpenChange={closeAndResetModal}
                className="max-w-[475px]  bg-transparent  h-[100%] !m-0 shadow-none "
            >
                <ModalContent className=' h-fit '>
                    <ModalBody className=" w-[100%] font-Poppins !min-h-[590px] mt-[39px] !p-0 rounded-tr-[5px] bg-white   rounded-tl-[35px]  rounded-br-[35px]  mx-auto">
                        <div className=' absolute w-fit mx-auto left-0 top-[0px]  right-[0px]'>
                            <img className=' flex  w-[150px] mx-auto object-cover ha ' src={logo} />
                        </div>
                        <div className=' flex flex-col w-[100%] mt-[25px] gap-[20px]   py-[20px] px-[25px]'>


                            <div className=' flex flex-col gap-[20px]'>
                                <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${nameFocused
                                            ? "text-[#000] -translate-y-[21px] hidden "
                                            : "text-[#8f8f8f] flex cursor-text"
                                            }`}
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text  "
                                        name="name"
                                        id="name"
                                        value={formData?.name}
                                        onChange={handleChange}
                                        onFocus={() => setNameFocused(true)}
                                        onBlur={(e) =>
                                            setNameFocused(e.target.value !== "")
                                        }
                                        className="w-full outline-none  px-[10px] text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                        autoComplete="naqsme"
                                    />
                                </div>


                                <div className=' flex w-[100%] gap-[10px]'>
                                    <select className="relative w-[80px]  outline-none cursor-pointer px-[10px]  h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                    </select>
                                    <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                        <label
                                            htmlFor="name"
                                            className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${numberFocused
                                                ? "text-[#000] -translate-y-[21px] hidden "
                                                : "text-[#8f8f8f] flex cursor-text"
                                                }`}
                                        >
                                            Enter Mobile Number
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="name"
                                            value={formData?.phone}
                                            onChange={handleChange}
                                            onFocus={() => setNumberFocused(true)}
                                            onBlur={(e) =>
                                                setNumberFocused(e.target.value !== "")
                                            }
                                            className="w-full outline-none  px-[10px] text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                            autoComplete="naqsme"
                                        />
                                    </div>
                                </div>
                                <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${emailFocused
                                            ? "text-[#000] -translate-y-[21px] hidden "
                                            : "text-[#8f8f8f] flex cursor-text"
                                            }`}
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text  "
                                        name="email"
                                        id="name"
                                        value={formData?.email}
                                        onChange={handleChange}
                                        onFocus={() => setEmailFocused(true)}
                                        onBlur={(e) =>
                                            setEmailFocused(e.target.value !== "")
                                        }
                                        className="w-full outline-none  px-[10px] text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                        autoComplete="naqsme"
                                    />
                                </div>

                                <div className=' flex w-[100%] gap-[10px]'>
                                    <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                        <label
                                            htmlFor="name"
                                            className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${nameFocused
                                                ? "text-[#000] -translate-y-[21px] hidden "
                                                : "text-[#8f8f8f] flex cursor-text"
                                                }`}
                                        >

                                        </label>
                                        <DatePicker className=' flex w-[100%] py-[11px]' onChange={handleDateChange} />
                                    </div>
                                    <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                        <label
                                            htmlFor="name"
                                            className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${personFocused
                                                ? "text-[#000] -translate-y-[21px] hidden "
                                                : "text-[#8f8f8f] flex cursor-text"
                                                }`}
                                        >
                                            Travelr count
                                        </label>
                                        <input
                                            type="text  "
                                            name="count"
                                            id="name"
                                            value={formData?.count}
                                            onChange={handleChange}
                                            onFocus={() => setPersonFocused(true)}
                                            onBlur={(e) =>
                                                setPersonFocused(e.target.value !== "")
                                            }
                                            className="w-full outline-none  px-[10px] text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                            autoComplete="naqsme"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full   h-[80px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                    htmlFor="name"
                                    className={`absolute left-[13px] font-Poppins  px-[5px]   bg-[#fff] text-[16px]   transition-all duration-200 ${addressFocused
                                        ? "text-[#000] -translate-y-[21px]  hidden "
                                        : "text-[#8f8f8f] flex cursor-text top-[10px]"
                                        }`}
                                >
                                    Address
                                </label>
                                <textarea
                                    type="text  "
                                    name="address"
                                    id="name"
                                    value={formData?.address}
                                    onChange={handleChange}
                                    onFocus={() => setAddressFocused(true)}
                                    onBlur={(e) =>
                                        setAddressFocused(e.target.value !== "")
                                    }
                                    className="w-full outline-none  px-[10px] text-[15px]  h-[100%]  py-[9px] font-Poppins font-[400] bg-transparent"
                                    autoComplete="naqsme"
                                ></textarea>
                            </div>
                            <div className="relative w-full   h-[87px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                    htmlFor="name"
                                    className={`absolute left-[13px] font-Poppins  px-[5px]   bg-[#fff] text-[16px]   transition-all duration-200 ${messageFocused
                                        ? "text-[#000] -translate-y-[21px]  hidden "
                                        : "text-[#8f8f8f] flex cursor-text top-[10px]"
                                        }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    type="text  "
                                    name="message"
                                    id="name"
                                    value={formData?.message}
                                    onChange={handleChange}
                                    onFocus={() => setMessageFocused(true)}
                                    onBlur={(e) =>
                                        setMessageFocused(e.target.value !== "")
                                    }
                                    className="w-full outline-none  px-[10px] text-[15px]  h-[100%]  py-[9px] font-Poppins font-[400] bg-transparent"
                                    autoComplete="naqsme"
                                ></textarea>
                            </div>
                            <button
                                className={`w-[100%] h-fit py-[13px] px-[12px] rounded-tl-[11px] flex justify-center items-center rounded-br-[11px] text-[18px] flex bg-[#005f94] border border-[#005f94] text-white`}
                                onClick={handleSubmit}
                            >
                                Connect with an Experts

                            </button>
                        </div>


                    </ModalBody>
                </ModalContent>
            </NextUIModal>




        </>
    )
}
