import { useEffect } from "react";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  clearVideos,
  fetchHomeData,
} from "../store/Reducers/getHomePageReduce";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

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
    const fetchData = async () => {
      try {
        dispatch(clearVideos());
        await dispatch(fetchHomeData(false));
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="h-full w-full px-[2%] pt-[2%] overflow-auto ">
      {error.length ? (
        "Error"
      ) : (
        <InfiniteScroll
          dataLength={videosData.length}
          next={() => dispatch(fetchHomeData(true))}
          hasMore={videosData.length < 500}
          loader={loading && <Spinner />}
          height={650}
          endMessage={
            error.length && <p style={{ textAlign: "center" }}>{error}</p>
          }
        >
          <div className="flex w-full flex-wrap justify-between">
            {videosData.map((_, index) => (
              <div
                key={index}
                className={`mb-10 ${sideBar ? "w-[32%]" : "w-[24%]"}`}
              >
                <Card key={index} cardData={videosData[index]} />
              </div>
            ))}{" "}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Home;
