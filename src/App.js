import Sidebar from "./components/sidebar";
import SideBar2 from "./components/sideBar2";
import SideBar3 from "./components/sideBar3";

function App() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <SideBar2 />
      <SideBar3 />
    </div>
  );
}

export default App;
