import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import YoutubeBar from "./youtubeBar";
import SubSideBarTitles from "./subSideBarTitles";
import { sideBarDispatch } from "../Types";

const SideBar = ({ setSideBar, sideBar }: sideBarDispatch) => {
  const mainLinks = [
    {
      icon: <MdHomeFilled />,
      name: "Home",
    },
    {
      icon: <FaRegCompass />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary />,
      name: "Library",
    },
    {
      icon: <MdHistory />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];
  return (
    <div className="shadow-lg  shadow-[#c7c7c7]  h-full  overflow-auto text-xl bg-[#0f0f0f] ">
      <div className="pt-[18px] pl-[8%] pr-[10%] min-h-full">
        <div>
          <div>
            <div className="text-2xl">
              <YoutubeBar setSideBar={setSideBar} sideBar={sideBar} />
            </div>
          </div>
        </div>

        <div className="mt-[10%]">
          <div className="my-4">
            <SubSideBarTitles MyObject={mainLinks} />
          </div>
          <div className="p-[0.1px] bg-[#323232]"></div>
          <div className="my-4">
            <SubSideBarTitles MyObject={secondaryLinks} />
          </div>
          <div className="p-[0.1px] bg-[#323232]"></div>
          <div className="my-4">
            <SubSideBarTitles MyObject={subscriptionLinks} />
          </div>
          <div className="p-[0.1px] bg-[#323232]"></div>
          <div className="my-4">
            <SubSideBarTitles MyObject={helpLinks} />
          </div>
          <div className="p-[0.1px] bg-[#323232]"></div>
          <div>
            {textLinks.map((element, i) => {
              return (
                <ul
                  key={i}
                  className="mr-2 flex gap-2 flex-wrap text-sm p-4 text-zinc-400"
                >
                  {element.map((element, j) => (
                    <li key={j} className="mr-2">
                      {element}
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
          <div className="mb-8 mt-2">
            <span className="px-4 text-sm text-zinc-400">
              &copy; 2022 Google
            </span>
            <br />
            <p className="px-4 pt-3 text-sm text-zinc-400">
              This clone is for educational purpose only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
