import { PropsWithChildren } from "react"

interface IProps {
    text?: string,
    border?: boolean,
    icon?: boolean
}

export default function Btn({ children, ...props }: PropsWithChildren<IProps>) {
    return (
        <button
            className={
                "flex py-1 mx-2 rounded-lg text-gray-500 hover:bg-yellow-200 hover:text-gray-600 " +
                "transition-all " +
                (props.border ? "border-yellow-400 border-2 text-yellow-400 " : " ") +
                (props.icon ? "px-1" : "px-3")}>
            {props.text}
            {children}
        </button>
    )
}