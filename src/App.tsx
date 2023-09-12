import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const [sideBar, setSideBar] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen">
      <NavBar setSideBar={setSideBar} sideBar={sideBar}/>
      {sideBar && <SideBar setSideBar={setSideBar} sideBar={sideBar} />}
    </div>
  );
}

export default App;
