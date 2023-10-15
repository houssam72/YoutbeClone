import React from "react";
import { homeCardData } from "../Types";

type CardProps = {
  cardData: homeCardData;
};

const Card = ({ cardData }: CardProps) => {
  return (
    <div className="w-full  bg-[#0f0f0f]">
      <div className="h-[60%]">
        <div className="relative w-full h-full">
          <img
            src={cardData.videoPicture}
            // src="./houssam.jpg"
            alt="CardImg"
            className="w-full h-full object-cover rounded-3xl border-solid"
          />
          <div className="absolute right-4 bottom-2 text-sm font-bold bg-[#0f0f0f] p-1 rounded-md">
            17:50
          </div>
        </div>
      </div>
      <div className="flex flex-row py-2 px-2 ">
        <div className="mr-2">
          <div className=" flex items-center ">
            <img
              src="./houssam.jpg"
              alt="Profile"
              className=" rounded-[50%] h-8 w-8  align-middle border-none"
            />
          </div>
        </div>
        <div>
          <div className="">{cardData.title}</div>
          <div className="text-sm my-[2px] text-zinc-400">
            <div className="">{cardData.ChannelFullName}</div>
            <div>{cardData.viewsNumber}k . il y'as un an</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
