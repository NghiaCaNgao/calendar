import { useState } from "react";
import Tippy from "@tippyjs/react"
import Icon from "@/app/components/icon";

export interface IStageData {
    name: string;
    description: string;
    icon: any;
}

interface IProps {
    data: IStageData;
    selected?: boolean;
    size?: "small" | "medium";
}

export default function StageItem(props: IProps) {
    const [hover, setHover] = useState(false);

    return (
        <Tippy
            placement="bottom"
            theme="yellow"
            content={
                <div className="my-1 w-52">
                    <h1 className="text-lg font-medium px-2">
                        {props.data.name}
                    </h1>
                    <div className="p-2 ">
                        {props.data.description}
                    </div>
                </div>}>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={"border-[1px] m-3 m flex justify-center items-center cursor-pointer transition-all " +
                    (props.size === "small" ? "w-9 h-9 rounded-xl " : "w-14 h-14 rounded-2xl ") +
                    (props.selected
                        ? "bg-yellow-400 border-yellow-400 shadow-xl "
                        : "bg-white border-gray-300 hover:border-yellow-300 hover:bg-yellow-300")}
            >
                <Icon
                    icon={props.data.icon}
                    className="transition-all"
                    stroke={
                        (hover || props.selected ? "black" : "#6b7280")}
                />
            </div>
        </Tippy>
    )
}