import ContentHeader from "./ContentHeader";
import MainContent from "./MainContent";
import { useRecoilState } from "recoil";
import { SideBarAtom } from "../../store/SideBarAtom";
import { memo } from "react";

const Content = memo(() => {

    const [isSidebarOpen, setIsSidebarExpanded] = useRecoilState(SideBarAtom);


    return (
        <div onClick={() => {
            if (window.innerWidth >= 768 || !isSidebarOpen) return;
            setIsSidebarExpanded(!isSidebarOpen);
        }} className={`w-full bg-background-100 p-4 transition-all duration-300 pl-20 md:pl-4 ${isSidebarOpen ? "max-md:blur-sm" : "blur-0"}`}>
            <div className={isSidebarOpen ? "pointer-events-none md:pointer-events-auto" : ""}>
                <ContentHeader />
                <MainContent />
            </div>


        </div>
    );
});

export default Content;