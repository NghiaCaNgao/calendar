'use client';

import Image from "next/image"
import Navigation from "./navigation"
import Btn from "./btn"

import { Kanit } from 'next/font/google'
import { BellSvg, GlobalSvg } from "@/app/components/icon"
import { useState, useEffect, useRef } from "react";
import NotificationPanel from "./notification";

const kanit = Kanit({
    subsets: ['vietnamese'],
    weight: ["100", "200", "300", "400", "500", "600"],
})

const navLinks = [
    {
        href: "/",
        name: "Home"
    },
    {
        href: "/usage",
        name: "Usage"
    }
]

type language = "Vi" | "En"

export default function Header() {

    const ref = useRef<HTMLDivElement>(null);
    const [showNotif, setShowNotif] = useState(false)
    const [config, setConfig] = useState({
        lang: "Vi"
    })

    function handleLanguageChange() {
        setConfig({
            lang: (config.lang === "Vi") ? "En" : "Vi"
        });
        console.log("Cho")
    }

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
        <div className="bg-[#ffffffd9] p-4 w-full border-b-[1px] backdrop-blur-sm border-gray-200 shadow-md sticky top-0 left-0">
            <div className={kanit.className + " flex container mx-auto justify-between "}>
                {/* Left */}
                <div className="lg:w-1/2 xl:w-1/3 flex items-center justify-between flex-none">
                    {/* Logo */}
                    <a className="flex text-2xl flex-none" href="/">
                        <Image src="/logo.png" alt="logo" width={32} height={32} className="mr-3" />
                        <p className={" select-none font-bold"}>
                            <span className="text-gray-600">Calendar</span>
                            <span className="text-yellow-400">Maker</span>
                        </p>
                    </a>

                    {/* Nav */}
                    <div className="hidden lg:flex">
                        <Navigation navLinks={navLinks} />
                    </div>
                </div>

                {/* Right */}
                <div className={"w-full flex items-center justify-end flex-grow"}>
                    <Btn
                        onClick={handleLanguageChange}
                        icon={GlobalSvg}
                        text={config.lang}
                    />
                    <div className="relative" ref={ref}>
                        <Btn
                            onClick={handleNotificationShow}
                            icon={BellSvg}
                            show={showNotif}
                        />
                        <NotificationPanel show={showNotif} />
                    </div>
                    <Btn text="Login" />
                    <Btn text="Sign up" border />
                </div>

            </div>
        </div>
    )
}