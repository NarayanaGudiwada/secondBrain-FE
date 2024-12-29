import { ReactElement } from "react";

interface Buttonprops {
    variant: "primary" | "Secondary"
    size: "sm" | "md" | "lg",
    text: string,
    Icon?: ReactElement
}

const Button = (props: Buttonprops) => {
    return <button className="bg-red-500 p-4 rounded-lg">
        {props.text}
    </button>
}

export default Button;