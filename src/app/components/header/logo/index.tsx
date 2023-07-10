import Image from "next/image"

export default function Logo() {
    return (
        <a className="flex text-2xl flex-none" href="/">
            <Image src="/logo.png" alt="logo" width={32} height={32} className="mr-3" />
            <p className={" select-none font-bold"}>
                <span className="text-gray-800">Calendar</span>
                <span className="text-yellow-400">Maker</span>
            </p>
        </a>
    )
}