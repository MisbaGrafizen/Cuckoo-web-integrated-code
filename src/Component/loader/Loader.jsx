import React from "react";

export default function Loader() {
  return (
    <>
      <div   backdrop={"blur"}
        placement={"center"} className=" w-[100%] h-[100vh]    flex justify-center items-center z-[8000]  ">
        <div className="loader  flex justify-between items-center mx-auto "></div>
      </div>
    </>
  );
}








