"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface IProps {
    navLinks: {
        href: string;
        name: string;
    }[];
}

export default function Navigation({ navLinks }: IProps) {
    const pathname = usePathname()
    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)

                return (
                    <Link
                        className={
                            " px-3 py-1 " +
                            (isActive
                                ? 'text-yellow-400 font-semibold'
                                : 'text-gray-500 hover:bg-yellow-500 hover:text-yellow-800 rounded-lg')}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}