import Link from "next/link"

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
        <Link href={item.link}>
            {item.label}
        </Link>
    )
}

export default function NavbarLading() {
    return (
        <>
            <div className="flex bg-blue-950 p-4 justify-between">
                <h1>
                    Transporte Fluvial Guaviare
                </h1>
                <nav>
                    {itemsNav.map((item) => (
                        <LinksNavbarLading key={item.label} item={item} />
                    ))}
                </nav>

                <button>
                    Iniciar Sesion
                </button>

            </div>
        </>
    )
}
