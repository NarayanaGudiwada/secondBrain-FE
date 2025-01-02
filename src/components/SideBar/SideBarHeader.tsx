import { memo } from "react";
import { useRecoilState } from "recoil";
import { SideBarAtom } from "../../store/SideBarAtom";
import { BrainIcon } from "../Icons/BrainIcon";

const SideBarHeader = memo(() => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useRecoilState(SideBarAtom);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };


  return (
    <>
      <div
        className="flex justify-center items-center gap-2"
        onClick={toggleSidebar}
      >
        <BrainIcon />
        {isSidebarExpanded && (
          <h2 className="text-xl text-nowrap font-semibold transition-all duration-300">
            Second <span className="text-purple-500">Brain</span>
          </h2>
        )}
      </div>
    </>
  );
});

export default SideBarHeader;
