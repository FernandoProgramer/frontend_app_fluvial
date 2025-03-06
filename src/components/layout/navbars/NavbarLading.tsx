import { Ship } from "lucide-react"
import Link from "next/link"
import { Nunito } from 'next/font/google'


/**
 * Fonts
 */
const nunito = Nunito({
    weight: '900',
    subsets: ['latin'],
})
/** */

const itemsNav = [
    {
        label: "Sobre Nosotros",
        link: "/about"
    },
    {
        label: "Blog",
        link: "/blog"
    },
]

function LinksNavbarLading({ item }: { item: any }) {
    return (
        <Link
            href={item.link}
            className="px-2 transition duration-300 border-b-2 border-transparent hover:border-blue-500"
        >
            {item.label}
        </Link>
    )
}

export default function NavbarLading() {
    return (
        <>
            <div className="flex bg-blue-950 p-2 justify-between items-center">
                <Link href="/">
                    <h1
                        className={`${nunito.className} font-extrabold text-lg text-[#2FC9C6]`}
                    >
                        Transporte Fluvial Guaviare
                    </h1>
                </Link>
                <nav className="flex gap-1">
                    {itemsNav.map((item) => (
                        <LinksNavbarLading key={item.label} item={item} />
                    ))}
                </nav>

                <Link href="auth/login"
                    className="bg-[#269EF5] px-5 py-2 rounded-lg flex gap-1 "

                >
                    <Ship /> <span>Iniciar Sesión</span>
                </Link>

            </div>
        </>
    )
}
