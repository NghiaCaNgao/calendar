import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface INavLink {
    href: string;
    name: string;
}

const navLinks: INavLink[] = [
    {
        href: "/",
        name: "Home"
    },
    {
        href: "/usage",
        name: "Usage"
    }
]

export default function Navigation() {
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
                                : 'text-gray-500 hover:bg-yellow-500 hover:text-black rounded-lg')}
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