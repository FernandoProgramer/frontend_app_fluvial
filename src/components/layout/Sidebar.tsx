"use client"
import { BookUser, Building2, ChevronsDown, ChevronUp, LogOut, PackageSearch, Sailboat, Send, Ship, Users, Warehouse } from "lucide-react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType, useState } from "react";


const outfit = Outfit({
    subsets: ["latin"]
})

interface ItemsNavInterface {
    label: string,
    icon?: ComponentType<any>,
    link?: string,
    subItems?: ItemsNavInterface[]
}

const sizeIcon: number = 15;

const itemsNav: ItemsNavInterface[] = [
    {
        label: "Clientes",
        icon: Users,
        link: "clients"
    },
    {
        label: "Personal",
        icon: BookUser,
        link: "employees"
    },
    {
        label: "Vehiculos",
        icon: Sailboat,
        link: "vehicles"
    },
    {
        label: "Inventario",
        icon: PackageSearch,
        subItems: [
            {
                label: "Envios",
                link: "inventory/shipments"
            },
            {
                label: "Productos",
                link: "inventory/products"
            },
        ]
    },
    {
        label: "Bodegas",
        icon: Warehouse,
        link: "wineries"
    },
    {
        label: "Sucursales",
        icon: Building2,
        link: "branches"
    },
]

function LinkBox({ item, menuOpen, toggleSubMenu }: { item: ItemsNavInterface, menuOpen: string | null, toggleSubMenu: (label: string | null) => void }) {

    const path = usePathname();
    const inactiveLink = "flex gap-2 p-2 items-center hover:text-[#D06942] rounded-md";
    const activeLink = inactiveLink + " bg-[#D06942] hover:text-white";

    return (
        <>
            {
                item.subItems ? (
                    <div>
                        <button
                            className="flex gap-2 p-2 justify-between items-center w-ful hover:text-[#D06942]"
                            type="button"
                            onClick={() => toggleSubMenu(item.label)}
                        >
                            {item.icon ? <item.icon size={sizeIcon} /> : null}
                            <span>
                                {item.label}
                            </span>
                            {menuOpen ? <ChevronUp className="text-gray-500 ms-11" size={sizeIcon} /> : <ChevronsDown className="text-gray-500 ms-11" size={sizeIcon} />}
                        </button>


                        {menuOpen === item.label && item.subItems && (
                            <div className="flex flex-col gap-1 border-s border-gray-600 ms-4">
                                {item.subItems.map((subItem: ItemsNavInterface) => (
                                    <Link
                                        key={subItem.label}
                                        className="p-2 flex gap-2 justify-between items-center hover:text-[#D06942]"
                                        href={`/dashboard/${subItem.link}`}
                                    >
                                        <span>{subItem.label}</span>
                                        {subItem.icon && <subItem.icon size={sizeIcon} />}
                                    </Link>
                                ))}
                            </div>
                        )}


                    </div >
                ) : (
                    <Link
                        className={path === `/dashboard/${item.link}` ? activeLink : inactiveLink}
                        href={`/dashboard/${item.link}`}
                    >
                        {item.icon ? <item.icon size={sizeIcon} /> : null}
                        <span>
                            {item.label}
                        </span>
                    </Link >
                )
            }
        </>
    )
}
export default function Sidebar() {


    const [menuOpen, setMenuOpen] = useState<string | null>(null);

    function toggleSubMenu(label: string) {
        setMenuOpen(menuOpen === label ? null : label);
    }

    return (
        <div className={`${outfit.className} bg-[#17151F] p-2 flex flex-col gap-[1rem] text-sm`}>
            <div className="flex flex-col justify-center items-center mt-5">
                <Ship size={30} className="border rounded-full " />
                <h1>
                    Dashboard
                </h1>
            </div>
            {/* <div
                className="flex gap-1 items-center bg-[#D06942] p-1 rounded-full font-bold"
            >
                <img
                    className="object-cover w-[3rem] h-[3rem] rounded-full"
                    src="https://st3.depositphotos.com/12985790/17521/i/450/depositphotos_175218564-stock-photo-smiling-handsome-man-holding-cup.jpg"
                    alt="Foto de perfil"
                />

                Fernando Alfonso

            </div> */}
            <nav className="flex flex-col gap-1">
                {itemsNav.map((item) => (
                    <LinkBox
                        menuOpen={menuOpen}
                        toggleSubMenu={() => toggleSubMenu(item.label)}
                        key={item.label}
                        item={item}
                    />
                ))}
            </nav>

            <button
                className="flex gap-1 items-center bg-[#E22259] text-white p-2 rounded-md justify-center"
                type="button"
            >
                <LogOut /> <span>Cerrar Sesión</span>
            </button>

        </div>
    )
}
