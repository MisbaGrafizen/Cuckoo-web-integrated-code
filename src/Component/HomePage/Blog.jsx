import React, { useEffect, useState } from "react";

import mainimg from "../../../public/VisaImage/visa2.jpeg"

import { Link, useNavigate } from "react-router-dom";

export default function Blog() {
//   const navigate = useNavigate();



  

  return (
    <div className="w-[75%] flex   mx-auto">
      <div className="w-[100%] flex flex-col md:gap-[20px]">
 
        <div className="flex w-[100%] gap-[30px]md:mt-[0px] flex-col justify-between">
          <div className="md:w-[100%] flex md:flex-row flex-col  ">
            <div className=" w-[100%] flex flex-row md:gap-[19px] md:overflow-x-hidden  gap-[20px] overflow-x-auto flex-shrink-0 py-[20px] ">


                  <>
                   
                    <div
                      
                      className=" md:w-[250px]  mb-[20px] h-[410px] w-[300px] mx-auto md:mx-0  relative  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer flex-shrink-0  "
                    >
                      <img
                        className="md:h-[200px] object-cover h-[210px] "
                        src={mainimg}
                     
                      />
                      <div className=" w-[90px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  bg-[#005c95]  rounded-tl-[10px] rounded-br-[10px]">
                        {new Date().toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                        })}

                      </div>
                      <div className=" flex w-[100%]  pt-[px]  px-[10px] flex-col  gap-[8px]">
                        <div className=" font-[600] font-Rose text-[16px]">
                          <p className="flex  font-Poppins font-[600] text-[#005c95] text-ju  leading-[22px]">
                          nisl sollicitudin quis ex vehicula ac consequat eget
                          </p>
                        </div>
                        <div className=" text-[12px] font-[400]  text-[#646464]">
                          <p className="font-Poppins text-justify ">
                          sed vehicula nisl sollicitudin quis. Praesent vel ex vehicula ac consequat eget, condimentum vel velit.Praesent   Praesent Aenean tincidun
                          </p>
                        </div>
                        <div
                          className=" text-[14px] w-[100%]  cursor-pointer  absolute bottom-5  text-[#005c95] flex  justify-start font-[600]"
            
                        >
                          <p className=" font-Poppins">Read More </p>
                        </div>
                      </div>
                    </div>

                    <div
                      
                      className=" md:w-[250px]  mb-[20px] h-[410px] w-[300px] mx-auto md:mx-0  relative  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer flex-shrink-0  "
                    >
                      <img
                        className="md:h-[200px] object-cover h-[210px] "
                        src={mainimg}
                     
                      />
                      <div className=" w-[90px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  bg-[#005c95]  rounded-tl-[10px] rounded-br-[10px]">
                        {new Date().toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                        })}

                      </div>
                      <div className=" flex w-[100%]  pt-[px]  px-[10px] flex-col  gap-[8px]">
                        <div className=" font-[600] font-Rose text-[16px]">
                          <p className="flex  font-Poppins font-[600] text-[#005c95] text-ju  leading-[22px]">
                          nisl sollicitudin quis ex vehicula ac consequat eget
                          </p>
                        </div>
                        <div className=" text-[12px] font-[400]  text-[#646464]">
                          <p className="font-Poppins text-justify ">
                          sed vehicula nisl sollicitudin quis. Praesent vel ex vehicula ac consequat eget, condimentum vel velit.Praesent   Praesent Aenean tincidun
                          </p>
                        </div>
                        <div
                          className=" text-[14px] w-[100%]  cursor-pointer  absolute bottom-5  text-[#005c95] flex  justify-start font-[600]"
            
                        >
                          <p className=" font-Poppins">Read More </p>
                        </div>
                      </div>
                    </div>     <div
                      
                      className=" md:w-[250px]  mb-[20px] h-[410px] w-[300px] mx-auto md:mx-0  relative  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer flex-shrink-0  "
                    >
                      <img
                        className="md:h-[200px] object-cover h-[210px] "
                        src={mainimg}
                     
                      />
                      <div className=" w-[90px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  bg-[#005c95]  rounded-tl-[10px] rounded-br-[10px]">
                        {new Date().toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                        })}

                      </div>
                      <div className=" flex w-[100%]  pt-[px]  px-[10px] flex-col  gap-[8px]">
                        <div className=" font-[600] font-Rose text-[16px]">
                          <p className="flex  font-Poppins font-[600] text-[#005c95] text-ju  leading-[22px]">
                          nisl sollicitudin quis ex vehicula ac consequat eget
                          </p>
                        </div>
                        <div className=" text-[12px] font-[400]  text-[#646464]">
                          <p className="font-Poppins text-justify ">
                          sed vehicula nisl sollicitudin quis. Praesent vel ex vehicula ac consequat eget, condimentum vel velit.Praesent   Praesent Aenean tincidun
                          </p>
                        </div>
                        <div
                          className=" text-[14px] w-[100%]  cursor-pointer  absolute bottom-5  text-[#005c95] flex  justify-start font-[600]"
            
                        >
                          <p className=" font-Poppins">Read More </p>
                        </div>
                      </div>
                    </div>     <div
                      
                      className=" md:w-[250px]  mb-[20px] h-[410px] w-[300px] mx-auto md:mx-0  relative  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer flex-shrink-0  "
                    >
                      <img
                        className="md:h-[200px] object-cover h-[210px] "
                        src={mainimg}
                     
                      />
                      <div className=" w-[90px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  bg-[#005c95]  rounded-tl-[10px] rounded-br-[10px]">
                        {new Date().toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                        })}

                      </div>
                      <div className=" flex w-[100%]  pt-[px]  px-[10px] flex-col  gap-[8px]">
                        <div className=" font-[600] font-Rose text-[16px]">
                          <p className="flex  font-Poppins font-[600] text-[#005c95] text-ju  leading-[22px]">
                          nisl sollicitudin quis ex vehicula ac consequat eget
                          </p>
                        </div>
                        <div className=" text-[12px] font-[400]  text-[#646464]">
                          <p className="font-Poppins text-justify ">
                          sed vehicula nisl sollicitudin quis. Praesent vel ex vehicula ac consequat eget, condimentum vel velit.Praesent   Praesent Aenean tincidun
                          </p>
                        </div>
                        <div
                          className=" text-[14px] w-[100%]  cursor-pointer  absolute bottom-5  text-[#005c95] flex  justify-start font-[600]"
            
                        >
                          <p className=" font-Poppins">Read More </p>
                        </div>
                      </div>
                    </div>
               
                  </>







              {/* <div className=" flex-shrink-0  md:w-[250px]  h-[410px] w-[250px] relative mx-auto   gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px] object-" src={expertTips1} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className=" flex font-[600] font-Monda">03 February</p>
                </div>
                <div className=" flex w-[100%]  justify-start px-[16px] py-[4px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] text-left font-Rose text-[16px]">
                    <p className=" flex  font-Poppins font-[600] text-[#005c95] ">
                    Rotex Fans: The Future of Energy-Efficient Cooling
                    </p>
                  </div>
                  <div className=" text-[14px] font-[400] font-Redhat text-[#646464]">
                    <p className=" font-Poppins text-justify ">
                    Discuss how Rotex Fans leverage BLDC technology to provide superior cooling while savings
                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]  text-[#005c95] absolute bottom-3 pl-[15px] cursor-pointer flex justify-between font-[600]"
                    onClick={handleblog1}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div> */}
              {/* <div className=" md:w-[250px] flex-shrink-0  h-[410px] w-[250px] mx-auto  relative  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px] ob" src={expertTips2} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className=" flex font-[600] font-Monda">01 February</p>
                </div> 
                <div className=" flex w-[100%]  justify-start px-[16px] py-[5px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] font-Rose text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#005c95] ">
                    Why Choose Rotex BLDC Fans Over Conventional Fans?

                    </p>
                  </div>
                  <div className=" text-[14px] font-[400]  text-[#646464]">
                    <p className="font-Poppins text-justify ">
                    Highlight the unique advantages of Rotex BLDC fans, including energy efficiency, quieter operation ...
                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]  cursor-pointer  absolute bottom-3 pl-[15px] text-[#005c95] flex justify-between font-[600]"
                    onClick={handleblog3}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div>
              <div className=" md:w-[250px] flex-shrink-0  w-[250px] relative mx-auto h-[410px]  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px]" src={expertTips3} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className="  flex font-[600] font-Monda">29 January</p>
                </div>
                <div className="  flex w-[100%]  justify-start px-[16px] py-[5px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] font-Rose text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#005c95] ">
                    5-Star Rated Rotex Fans: A Smart Choice for Your Home

                    </p>
                  </div>
                  <div className=" text-[14px]  font-Poppins font-[400] font-Redhat text-[#646464]">
                    <p className=" font-Poppins text-justify ">
                    Emphasize the energy savings and performance benefits of 5-star rated Rotex Fans..


                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]   cursor-pointer absolute bottom-3 pl-[15px]  text-[#005c95] flex justify-between font-[600]"
                    onClick={handleblog2}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div>
              <div className=" flex-shrink-0  md: md:w-[250px]  h-[410px] w-[250px] relative mx-auto   gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px] object-" src={expertTips4} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className=" flex font-[600] font-Monda">25 January</p>
                </div>
                <div className="  flex w-[100%]  justify-start px-[16px] py-[4px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] text-left font-Rose text-[16px]">
                    <p className=" flex  font-Poppins font-[600] text-[#005c95] ">
                    How Rotex Fans Help You Beat the Heat with Less Power
                    </p>
                  </div>
                  <div className=" text-[14px] font-[400] font-Redhat text-[#646464]">
                    <p className=" font-Poppins text-justify ">
                    Discuss the cost-effectiveness and cooling power of Rotex Fans in hot climates ...
                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]  text-[#005c95] absolute bottom-3 pl-[15px] cursor-pointer flex justify-between font-[600]"
                    onClick={handleblog1}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="w-[120px]  flex justify-center items-center mt-[15px] text-[#fff] py-[8px] cursor-pointer font-[600]  anime-green-btn1  font-Redhat rounded-[10px] text-center mx-auto ">
          <p>View More</p>{" "}
        </div> */}
        <div className="flex  w-[100%]   mb-[40px] justify-start ">
         

        </div>
      </div>
    </div>
  );
}
