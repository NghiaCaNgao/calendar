import Image from "next/image"
import Navigation from "./navigation"
import Btn from "./btn"

import { Kanit } from 'next/font/google'
import Icon, { BellSvg, GlobalSvg } from "@/app/components/icon"

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

export default function Header() {

    return (
        <div className="bg-white p-4 w-full border-b-[1px] border-gray-200 shadow-md">
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
                    <Btn>
                        <Icon icon={GlobalSvg} stroke="#6b7280" />
                        <span className={" ml-2 text-gray-500"}>Vi</span>
                    </Btn>
                    <Btn icon>
                        <Icon icon={BellSvg} stroke="#6b7280" />
                    </Btn>
                    <Btn text="Login" />
                    <Btn text="Sign up" border />
                </div>

            </div>
        </div>
    )
}