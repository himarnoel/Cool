import { useState } from "react";
import reactLogo from "./assets/logo.svg";
import "./App.css";
import img1 from "./assets/im1.png";
import img2 from "./assets/im2.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <div className="bg-[#1F311D] w-full h-[35rem] px-32 text-white ">
        {" "}
        <nav className="flex  pt-7 items-center w-full justify-between ">
          <span className="flex items-center">
            <img src={reactLogo} alt="" className="object-contain w-10 mr-3" />
            <span className="font-bold font-poppins text-2xl">DroidPad</span>
          </span>
          <span className="flex items-center justify-center text-sm">
            <a href="" className="p-2">
              Portfolio
            </a>
            <a href="" className="p-2">
              Resources
            </a>
            <a href="" className="p-2">
              Pricing
            </a>
            <a href="" className="p-2">
              Company
            </a>
          </span>
          <span className="flex items-center justify-center  text-sm">
            <button className="p-3">Login</button>
            <button className="p-3 pr-5 px-8 py-2 bg-[#919090]">sign Up</button>
          </span>
        </nav>
        {/* Hero scerction */}
        <div className="grid md:grid-cols-2 mt-12">
          <div className="h-full flex flex-col items-start ">
            {" "}
            <p className="text-[3rem] w-[32rem] mt-2">
              Payment card <br /> to{" "}
              <span className="text-[#87FF4F] mr-3">grow</span>
              your{" "}
              <span className="border-b-4 border-b-[#87FF4F] rounded-sm">
                business
              </span>
            </p>
            <p className="w-[25rem] text-sm mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et odio
              morbi magna proin purus. Tellus in ornare.
            </p>
            <div className="flex mt-8 font-medium">
              <button className="p-3  text-sm rounded-md bg-[#87FF4F] text-black">
                Request a Demo
              </button>{" "}
              <button className="p-3  text-sm  ">Scroll More</button>
            </div>
          </div>

          <div className="flex flex-col items-center   ">
            <div className="absolute z-[-20rem] rounded-full h-[20rem] w-[20rem] mt-10 border border-white "></div>
            <img
              src={img2}
              alt=""
              className="object-contain w-[15rem] relative z-[30rem]"
            />
            <img
              src={img1}
              alt=""
              className="object-contain w-[25rem] absolute z-[30rem] left-[40rem] top-[10rem]"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
