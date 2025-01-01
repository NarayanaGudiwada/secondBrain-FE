interface InputProps {
    placeholder: string,
    onChange?: () => void
}

const Input = ({ placeholder, onChange }: InputProps) => {
    return <div>
        <input placeholder={placeholder} onChange={onChange} className="px-4 py-2 rounded m-2 border outline-purple-500" />
    </div>
}

export default Input;