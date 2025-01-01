import Content from "./components/Content/Content";
import { CreateContentModal } from "./components/Content/CreateContentModal";
import SideBar from "./components/SideBar/SideBar";
const App = () => {

  return (
    <div className="h-screen w-screen flex">
      <CreateContentModal />
      <SideBar />
      <Content />
    </div>
  )

}

export default App
