import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";

function App() {
  const [sideBar, setSideBar] = useState<boolean>(false);
  return (
    <div className=" w-screen h-screen">
      <div className="w-full  top-0 left-0 right-0 h-[10%] px-[1.3%]  ">
        <NavBar setSideBar={setSideBar} sideBar={sideBar} />
      </div>

      {sideBar && (
        <div className="w-[15%] fixed top-0 left-0 h-full   min-w-[230px]">
          <SideBar setSideBar={setSideBar} sideBar={sideBar} />
        </div>
      )}
      <div
        className={`${
          sideBar ? "w-[85%]" : " w-[100%] left-0"
        }  fixed right-0 h-[90%] `}
      >
        <Home sideBar={sideBar} />
      </div>
    </div>
  );
}

export default App;
