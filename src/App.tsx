import { useState } from "react";
import Button from "./components/Button"
import { Card } from "./components/Card";
import PlusIcon from "./components/Icons/PlusIcon";
import ShareIcon from "./components/Icons/ShareIcon";
import { CreateContentModal } from "./CreateContentModal";
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CreateContentModal open={modalOpen} closeModal={() => {
        setModalOpen(false);
      }} />
      <div className="p-4 bg-background-500">
        <div className="flex gap-2 justify-end">
          <Button variant="secondary" size="md" text="Share Brain" icon={<ShareIcon size="sm" />} />
          <Button variant="primary" size="md" text="Add Content" icon={<PlusIcon size="sm" />} onClick={() => {
            setModalOpen(true);
          }} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-4 max-md:items-center">
          <Card link="https://www.youtube.com/watch?v=Cs2g2VFWtbo" title="First video" type="youtube" />
          <Card link="https://x.com/BhanuPr34722079/status/1863835693392564374" title="First tweet" type="tweet" />
        </div>
      </div>
    </>
  );
}

export default App
