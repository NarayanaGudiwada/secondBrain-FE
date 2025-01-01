import Button from "../Button";
import PlusIcon from "../Icons/PlusIcon";
import ShareIcon from "../Icons/ShareIcon";
import { useSetRecoilState } from "recoil";
import { ModalAtom } from "../../store/ModalAtom";
import { memo } from "react";


const ContentHeader = memo(() => {
    const setModalOpen = useSetRecoilState(ModalAtom);
    return (
        <div className="flex gap-2 justify-end">
            <Button variant="secondary" size="md" text="Share Brain" icon={<ShareIcon size="sm" />} />
            <Button variant="primary" size="md" text="Add Content" icon={<PlusIcon size="sm" />} onClick={() => {
                setModalOpen(true);
            }} />
        </div>
    );
});


export default ContentHeader;