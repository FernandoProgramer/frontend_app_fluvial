"use client"
import { outfit, rock_salt } from "@/theme/fonts";
import { BookUser, Building2, ChevronsDown, ChevronUp, LayoutDashboard, LogOut, PackageSearch, Sailboat, Send, Ship, Users, Warehouse } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ComponentType, useState } from "react";
import Button from "../ui/Button";

interface ItemsNavInterface {
    label: string,
    icon?: ComponentType<any>,
    link?: string,
    subItems?: ItemsNavInterface[]
}

export const sizeIcon: number = 20;

const itemsNav: ItemsNavInterface[] = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        link: "/"
    },
    {
        label: "Clientes",
        icon: Users,
        link: "customers"
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
    const inactiveLink = "transition duration-200 flex gap-2 p-2 items-center hover:text-[#D06942] rounded-md";
    const activeLink = inactiveLink + " bg-[#D06942] hover:text-white";

    return (
        <>
            {
                item.subItems ? (
                    <div>
                        <button
                            className="transition duration-200 flex gap-2 p-2 justify-between items-center w-ful hover:text-[#D06942]"
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
                                        className="transition duration-200 p-2 flex gap-2 justify-between items-center hover:text-[#D06942]"
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
    const router = useRouter();
    function handleLogout() {
        return router.push('/auth/login');
    }

    const [menuOpen, setMenuOpen] = useState<string | null>(null);

    function toggleSubMenu(label: string) {
        setMenuOpen(menuOpen === label ? null : label);
    }

    return (
        <div className={`${outfit.className} bg-[#17151F] p-2 flex flex-col gap-[1rem] text-sm h-screen`}>
            <div className="flex flex-col justify-center items-center mt-5 gap-2">
                <Ship size={30} className="border rounded-full " />
                <h1 className={rock_salt.className}>
                    APP
                </h1>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto">
                {itemsNav.map((item) => (
                    <LinkBox
                        menuOpen={menuOpen}
                        toggleSubMenu={() => toggleSubMenu(item.label)}
                        key={item.label}
                        item={item}
                    />
                ))}
            </nav>
            <Button variant="destructive" onClick={handleLogout} className="flex">
                <LogOut size={sizeIcon} /> <span>Cerrar Sesión</span>
            </Button>
        </div>
    )
}
