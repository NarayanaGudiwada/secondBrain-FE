import { ReactElement } from "react";

type variantType = "primary" | "secondary"
type sizeType = "sm" | "md" | "lg"

interface Buttonprops {
    variant: variantType
    size: sizeType,
    text: string,
    icon?: ReactElement
}

const variantStyles: Record<variantType, string> = {
    "primary": "bg-purple-500 text-white",
    "secondary": "text-purple-400 bg-purple-200"
}

const sizeStyles: Record<sizeType, string> = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-3 px-6"
}

const defaultStyles  = "rounded-lg flex items-center gap-2"

const Button = (props: Buttonprops) => {
    return <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles}`}>
        <div>{props.icon}</div>
        {props.text}
    </button>
}

export default Button;