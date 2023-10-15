import { useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsCameraVideo, BsBell } from "react-icons/bs";
import { IoAppsSharp } from "react-icons/io5";
import YoutubeBar from "./youtubeBar";
import { sideBarDispatch } from "../Types";

const NavBar = ({ setSideBar, sideBar }: sideBarDispatch) => {
  const [inputClicked, setInputClicked] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const inputTextRef = useRef<HTMLInputElement>(null);

  const styleClicked = inputClicked
    ? "border-[#2E74B0] border-2"
    : "border-[#2d2d2d] border-2";
  return (
    <div className=" w-full h-full bg-[#0f0f0f] flex items-center  text-2xl ">
      <div className="w-[20%]">
        <YoutubeBar setSideBar={setSideBar} sideBar={sideBar} />
      </div>
      <div className="w-[60%]">
        <div className="flex w-4/6 mx-auto ">
          <div className="w-full flex items-center ">
            <div
              className={`${styleClicked} flex w-full  bg-black border-solid  rounded-l-3xl px-5 py-2`}
              onClick={() => {
                setInputClicked(true);
              }}
              onBlur={() => {
                setInputClicked(false);
              }}
            >
              {inputClicked && (
                <div className="flex items-center mr-4">
                  {" "}
                  <AiOutlineSearch />
                </div>
              )}

              <div className="w-full">
                <input
                  ref={inputTextRef}
                  type="text"
                  placeholder="Rechercher"
                  className={`focus:outline-0  w-full bg-black`}
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                  }}
                />
              </div>
              {inputText && (
                <div className="flex items-center">
                  <AiOutlineClose
                    className="cursor-pointer"
                    onClick={() => {
                      if (inputTextRef.current != null) {
                        inputTextRef.current.focus();
                      }
                      setInputText("");
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="text-3xl flex items-center border-2 bg-[#262727] border-solid border-[#2d2d2d] rounded-r-3xl px-5">
            <AiOutlineSearch className="cursor-pointer" />
          </div>
          <div className="flex items-center ml-6 rounded-full  hover:bg-[#444343]  bg-[#272727] p-3">
            {" "}
            <TiMicrophone className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-[20%] h-full">
        <div className="p-3  hover:rounded-full    hover:bg-[#272727] ">
          {" "}
          <BsCameraVideo className="cursor-pointer" />
        </div>
        <div className="p-3 hover:rounded-full    hover:bg-[#272727]">
          {" "}
          <IoAppsSharp className="cursor-pointer" />
        </div>
        <div className="p-3 hover:rounded-full    hover:bg-[#272727]">
          {" "}
          <div className=" relative">
            <BsBell className="cursor-pointer" />
            <div className=" absolute text-sm top-[-10px] left-3 rounded-full bg-red-700 px-1 font-bold">
              9+
            </div>
          </div>
        </div>
        <div className="ml-7 flex items-center h-4/6">
          <img
            src="./houssam.jpg"
            alt="Profile"
            className="  shadow-lg rounded-full h-full align-middle border-none"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
