import GlobalSvg from "@/app/assets/globe1.svg";
import BellSvg from "@/app/assets/bell.svg";
import React from "react";

export {
    GlobalSvg,
    BellSvg
}

interface IIcon extends React.ComponentPropsWithRef<"svg"> {
    icon: string;
}

export default function Icon({ icon: Icon, ...attr }: IIcon) {
    attr.stroke = attr.stroke || "black";
    attr.strokeWidth = attr.strokeWidth || 1.5;

    return (
        <>
            <Icon {...attr} />
        </>
    )
}