export type iconSizeType = "sm" | "md" | "lg"

export interface IconProps {
    size: iconSizeType;
}

export const iconSizeStyles: Record<iconSizeType, string> = {
    "sm": "size-4",
    "md": "size-6",
    "lg": "size-8"
}