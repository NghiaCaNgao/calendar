'use client';

import { PropsWithChildren, MouseEvent, ReactElement, ReactNode, useState } from "react"
import Icon from "@/app/components/icon"

interface IProps {
    text?: string,
    border?: boolean,
    icon?: any,
    show?: boolean
    onClick?: (event: MouseEvent) => void
}

export default function Btn({ children, ...props }: PropsWithChildren<IProps>) {
    const [hover, setHover] = useState(false);

    return (
        <button
            onClick={props.onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={
                "flex py-1 mx-2 rounded-lg text-gray-500 " +
                "transition-all " +
                (props.show || hover ? "bg-yellow-400 text-black " : " ") +
                (props.border ? "border-yellow-500 border-2 text-yellow-500 " : " ") +
                (props.text ? "px-3" : "px-1")}>
            {props.icon
                ? <Icon icon={props.icon} stroke={(hover || props.show) ? "black" : "#6b7280"} strokeWidth={1.5} className="transition-all" />
                : undefined}
            {props.text
                ? <span className={(props.icon ? "ml-2" : "")}>{props.text}</span>
                : undefined}
            {children}
        </button>
    )
}