import React from 'react'

export default function Bottom() {
    return (
        <>
            <div className=' flex-col fixed bottom-0 bg-white z-50  md:hidden flex w-[100%] '>
                <div className='  relative flex w-[100%] h-[50px] justify-between px-[20px] border-t items-center border-b border-[#c0c0c0]'>
                    <div
                        className={`flex text-[#005f94] font-Montserrat gap-[px] px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
`}                   >
                        <i
                            className="fa-solid fa-house text-[17px]"
                        ></i>
                        <p
                            className="font-Montserrat text-[10px] font-[600]"
                        >
                            Home
                        </p>
                        <span className=' absolute flex w-[30px] bottom-[5px] h-[2px] bg-[#005f94]'></span>
                    </div>

                    {/* About */}
                    <div
                        className={`flex font-Montserrat  px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
   `}
                    >
                        <i
                            className="fa-regular fa-circle-info text-[17px]"

                        ></i>
                        <p
                            className="font-Montserrat text-[10px] font-[600]"

                        >
                            About
                        </p>
                    </div>

                    {/* Blogs */}
                    <div

                        className={`flex font-Montserrat  px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] `}
                    >
                        <i
                            className="fa-solid fa-blog text-[17px]"

                        ></i>
                        <p
                            className="font-Montserrat text-[10px] font-[600]"

                        >
                            Blogs
                        </p>
                    </div>

                    {/* Support */}
                    <div

                        className={`flex font-Montserrat px-[10px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px]`}
                    >
                        <i
                            className="fa-solid fa-user-headset text-[17px]"

                        ></i>
                        <p
                            className="font-Montserrat text-[10px] font-[600]"

                        >
                            Support
                        </p>
                    </div>

                    {/* Cart */}
                    <div

                        className={`flex font-Montserrat gap-[3px] px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
         
        `}
                    >
                        <i class="fa-solid fa-address-card text-[17px]"></i>
                        <p
                            className="font-Montserrat text-[10px] font-[600]"

                        >
                 Profile
                        </p>
                    </div>
                </div>
                <div className=' w-[100%] justify-center text-[#fff] text-[11px]  flex  mx-auto  items-center gap-[10px] font-Poppins bg-[#005f94] py-[3px]'>
                    <i className="fa-light  text-[14px] fa-phone-volume"></i>
                    <p>
                        Inquiry now
                    </p>
                </div>
            </div>


        </>
    )
}





