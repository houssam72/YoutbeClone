import { BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { sideBarDispatch } from "../Types";

const YoutubeBar = ({ setSideBar, sideBar }: sideBarDispatch) => {
  return (
    <div className="flex">
      <div className="p-3 flex items-center hover:rounded-full    hover:bg-[#272727]">
        <GiHamburgerMenu
          className="cursor-pointer"
          onClick={() => {
            setSideBar(!sideBar);
          }}
        />
      </div>
      <div className="p-3 ml-2 flex">
        <BsYoutube className="text-3xl cursor-pointer" color="#ff0000" />
        <span className="ml-4 font-bold	text-xl cursor-pointer">YouTube</span>
      </div>
    </div>
  );
};

export default YoutubeBar;
