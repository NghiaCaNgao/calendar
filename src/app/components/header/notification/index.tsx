'use client';

import Icon, { Check, Trash } from "@/app/components/icon";
import NotifItem from "./notif-item";

interface IProps {
    show?: boolean;
}

export default function NotificationPanel(props: IProps) {
    return (
        <div
            className={
                "w-80 bg-[#ffffffd9] rounded-2xl border-[1px] border-gray-300 shadow-xl " +
                "absolute top-14 left-0 animate__animated animate__faster " +
                (props.show ? "animate__fadeIn" : "animate__fadeOut")
            }>
            <div className="rounded-2xl bg-white p-5 shadow-lg">
                <div className="text-gray-700 font-semibold text-2xl text-left flex justify-between">
                    Notification
                    <div>
                        <button className="p-1 hover:bg-yellow-400 rounded-lg mx-1">
                            <Icon icon={Check} />
                        </button>
                        <button className="p-1 hover:bg-yellow-400 rounded-lg mx-1">
                            <Icon icon={Trash} />
                        </button>
                    </div>
                </div>
                <p className="text-left -mt-2 text-gray-400 font-light text-sm">Have 3 new notifications</p>
            </div>

            <div className="p-5">
                <NotifItem new />
                <NotifItem new />
                <NotifItem />
            </div>
        </div>
    )
}