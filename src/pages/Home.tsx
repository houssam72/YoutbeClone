import { useEffect } from "react";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchHomeData } from "../store/Reducers/getHomePageReduce";
import { store } from "../store";
import { homeCardData } from "../Types";
import Spinner from "../components/Spinner";

type Props = {
  sideBar: boolean;
};
// 32
// 24
const Home = ({ sideBar }: Props) => {
  const dispatch = useAppDispatch();
  const videosData = useAppSelector((state) => state.homeData.data);
  const loading = useAppSelector((state) => state.homeData.loading);
  const error = useAppSelector((state) => state.homeData.error);
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);
  const elementsArray = new Array(20).fill(null);
  return (
    <div className="h-full w-full px-[2%] pt-[2%] overflow-auto ">
      {loading ? (
        <Spinner />
      ) : error.length ? (
        "Error"
      ) : (
        <div className="flex w-full flex-wrap justify-between">
          {videosData.map((_, index) => (
            <div
              key={index}
              className={` mb-10 ${sideBar ? "w-[32%]" : "w-[24%]"}  `}
            >
              <Card key={index} cardData={videosData[index]} />
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
