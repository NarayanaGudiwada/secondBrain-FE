import { useState } from "react";
import { CreateContentModal } from "../CreateContentModal";
import Button from "./Button";
import { Card } from "./Card";
import ShareIcon from "./Icons/ShareIcon";
import PlusIcon from "./Icons/PlusIcon";

const MainContent = () => {
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
                    <Card link="https://www.youtube.com/watch?v=Cs2g2VFWtbo" title="Sample video" type="youtube" />
                    <Card link="https://x.com/nitesh_singh5/status/1873975132307546464" title="Sample tweet" type="tweet" />
                </div>
            </div>
        </>
    );
}

export default MainContent;