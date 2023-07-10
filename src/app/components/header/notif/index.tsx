import { useEffect, useRef, useState } from "react";
import { BellSvg } from "@/app/components/icon";
import NotificationPanel from "./notification";
import Btn from "@/app/components/btn"


export default function Notif() {
    const ref = useRef<HTMLDivElement>(null);
    const [showNotif, setShowNotif] = useState(false)

    function handleNotificationShow() {
        setShowNotif(!showNotif);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (showNotif && ref.current && !ref.current.contains(event.target as Node)) {
                setShowNotif(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])


    return (
        <div className="relative" ref={ref}>
            <Btn
                onClick={handleNotificationShow}
                icon={BellSvg}
                show={showNotif}
            />
            <NotificationPanel show={showNotif} />
        </div>
    )
}