import Button from "./components/Button"
import { CrossIcon } from "./components/Icons/CrossIcon"


interface ModalProps {
    open: boolean,
    closeModal: () => void
}
export const CreateContentModal = ({ open, closeModal }: ModalProps) => {
    return <>
        {open && <div
            className="h-screen w-screen fixed top-0 left-0 bg-black opacity-90 flex justify-center items-center p-2"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeModal();
                }
            }}
        >
            <div className="  bg-white bg-opacity-100 p-4 rounded-lg ">
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

interface InputProps {
    placeholder: string,
    onChange?: () => void
}

const Input = ({ placeholder, onChange }: InputProps) => {
    return <div>
        <input placeholder={placeholder} onChange={onChange} className="px-4 py-2 rounded m-2 border outline-purple-500" />
    </div>
}