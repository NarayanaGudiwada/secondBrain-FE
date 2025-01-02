import { useRecoilValue } from "recoil";
import SideBarItemProps from "./SideBarItemType";
import { SideBarAtom } from "../../store/SideBarAtom";

const SideBarItem = ({ Icon, text }: SideBarItemProps) => {
  const isSidebarExpanded = useRecoilValue(SideBarAtom);

  return (
    <div className="flex justify-center items-center gap-4 hover:bg-slate-100 rounded-lg px-4 py-2 text-nowrap transition-all duration-300">
      <div>{Icon}</div>
      {isSidebarExpanded && <div className="text-lg font-normal text-slate-700">{text}</div>}
    </div>
  )
};

export default SideBarItem;
