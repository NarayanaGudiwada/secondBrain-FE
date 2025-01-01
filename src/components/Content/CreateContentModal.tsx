import { useRecoilState } from "recoil"
import Button from "../Button"
import { CrossIcon } from "../Icons/CrossIcon"
import { ModalAtom } from "../../store/ModalAtom"
import Input from "../Input"


export const CreateContentModal = () => {

    const [open, setModal] = useRecoilState(ModalAtom);
    const closeModal = () => {
        setModal(false);
    }

    return <>
        {open && <div
            className="inset-0 fixed top-0 left-0 flex justify-center items-center p-2 z-20 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeModal();
                }
            }}
        >
            <div className="  bg-white inset-0 opacity-100 p-4 rounded-lg ">
                <div className="flex justify-end">
                    <div onClick={closeModal} className="cursor-pointer">
                        <CrossIcon />
                    </div>
                </div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
                <div className="flex justify-center">
                    <Button variant="primary" text="Submit" size="md" />
                </div>

            </div>
        </div>
        }
    </>
}

