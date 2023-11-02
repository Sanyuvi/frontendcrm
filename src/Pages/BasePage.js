import SideBar from "../Components/sideBar";
import TopBar from "../Components/topBar";
import "daisyui/dist/full.css";

export default function Base({ children }) {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-800">
      <div className="grid h-20 card place-items-center ">
        <TopBar />
      </div>
      <div className="flex flex-nowrap place-items-center flex-grow">
        <div className="grid w-1/6 h-full card bg-gray-900 text-neutral-content m-1">
          <SideBar />
        </div>
        <div className="grid w-5/6 h-full card m-1 bg-gray-900 place-items-center text-neutral-content">
          {children}
        </div>
      </div>
    </div>
  );
}
