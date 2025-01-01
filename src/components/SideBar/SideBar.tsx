import { BrainIcon } from "../Icons/BrainIcon";
import { useRecoilState } from "recoil";
import { SideBarAtom } from "../../store/SideBarAtom";
import { memo, useEffect } from 'react';
import useMediaQuery from "../../hooks/useMediaQuery";

const SideBar = memo(() => {

  const [isSidebarExpanded, setIsSidebarExpanded] = useRecoilState(SideBarAtom);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsSidebarExpanded(isDesktop);
  }, [isDesktop]);

  return (
    <div
      className={`bg-white ${isSidebarExpanded ? "w-52" : "w-16"
        } h-screen p-4 transition-all duration-300 fixed md:static max-md:z-10 left-0 top-0 border-x-2 border-grey-300`}
    >
      <div className="flex justify-center items-center gap-2" onClick={toggleSidebar}>
        <BrainIcon />
        {isSidebarExpanded && <h2 className="text-xl text-nowrap font-semibold transition-all duration-300">Second <span className="text-purple-500">Brain</span></h2>}
      </div>

    </div>
  );
});

export default SideBar;