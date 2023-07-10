'use client';

import Navigation from "./navigation"
import Btn from "@/app/components/btn"
import Logo from "./logo";
import LangChanger from "./lang-changer";
import Notif from "./notif";

export default function Header() {
    return (
        <div className="bg-[#ffffffd9] p-4 w-full border-b-[1px] backdrop-blur-sm border-gray-200 shadow-md sticky top-0 left-0">
            <div className={" flex container mx-auto justify-between "}>
                {/* Left */}
                <div className="lg:w-1/2 xl:w-1/3 flex items-center justify-between flex-none">
                    {/* Logo */}
                    <Logo />

                    {/* Nav */}
                    <div className="hidden lg:flex">
                        <Navigation />
                    </div>
                </div>

                {/* Right */}
                <div className={"w-full flex items-center justify-end flex-grow"}>
                    <LangChanger />
                    <Notif />
                    
                    <Btn text="Login" />
                    <Btn text="Sign up" border />
                </div>

            </div>
        </div>
    )
}