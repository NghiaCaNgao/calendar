import GlobalSvg from "@/app/assets/globe1.svg";
import BellSvg from "@/app/assets/bell.svg";
import UpArrowSvg from "@/app/assets/arrowcircleup.svg";
import Trash from "@/app/assets/trash1.svg";
import Check from "@/app/assets/check.svg";
import InfoCircle from "@/app/assets/infocircle.svg";
import Edit4 from "@/app/assets/edit4.svg";
import Flag1 from "@/app/assets/flag1.svg";
import Gift from "@/app/assets/gift.svg";
import Like from "@/app/assets/like.svg";

import React from "react";

export {
    GlobalSvg, BellSvg, UpArrowSvg, Trash,
    Check, InfoCircle, Edit4, Flag1, Gift, Like
}

export interface IIcon extends React.ComponentPropsWithRef<"svg"> {
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