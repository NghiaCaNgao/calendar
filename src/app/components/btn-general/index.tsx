import {MouseEvent} from "react";

interface IProps {
    title: string,
    level?: "primary" | "secondary";
    onClick?: (event: MouseEvent) => void
}

export default function BtnNormal({ level = "primary", ...props }: IProps) {

    return (
        <button
            onClick={props.onClick}
            className={
                "transition-all px-2 py-1 rounded-lg border-[1px] outline-none " +
                (level === "primary"
                    ? "border-yellow-500 bg-yellow-400 text-black font-normal hover:bg-yellow-500 "
                    : " border-gray-200 hover:bg-gray-100 text-gray-500")
            }>
            {props.title}
        </button>
    )
}