"use client"
import { outfit, rock_salt } from "@/theme/fonts";
import { BookUser, Building2, ChevronsDown, ChevronUp, LayoutDashboard, LogOut, PackageSearch, Sailboat, Send, Ship, Users, Warehouse } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ComponentType, useState } from "react";
import { cn } from "@/utils/utils";
import { buttonVariants } from "../ui/Button";

interface ItemsNavInterface {
    label: string,
    icon?: ComponentType<any>,
    link?: string,
    subItems?: ItemsNavInterface[]
}

export const propsIcons: Record<string, number> = {
    size: 20,
    strokeWidth: 1.75,
};

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
        link: "boats"
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
        link: "warehouses"
    },
    {
        label: "Sucursales",
        icon: Building2,
        link: "branches"
    },
]

function LinkBox({ item, menuOpen, toggleSubMenu }: { item: ItemsNavInterface, menuOpen: string | null, toggleSubMenu: (label: string | null) => void }) {

    const path = usePathname();
    const inactiveLink = "transition duration-200 flex gap-2 p-2 items-center hover:text-white hover:bg-indigo-600 rounded-md";
    const activeLink = inactiveLink + " bg-indigo-600 text-white";

    return (
        <>
            {
                item.subItems ? (
                    <div>
                        <button
                            className={cn(inactiveLink)}
                            type="button"
                            onClick={() => toggleSubMenu(item.label)}
                        >
                            {item.icon ? <item.icon {...propsIcons} /> : null}
                            <span>
                                {item.label}
                            </span>
                            {menuOpen ? <ChevronUp className="ms-11" {...propsIcons} /> : <ChevronsDown className="ms-11" {...propsIcons} />}
                        </button>


                        {menuOpen === item.label && item.subItems && (
                            <div className={cn("flex flex-col gap-1 border-s border-gray-600 ms-4")}>
                                {item.subItems.map((subItem: ItemsNavInterface) => (
                                    <Link
                                        key={subItem.label}
                                        className={cn("!text-left !ps-2", buttonVariants({ variant: "link" }))}
                                        href={`/dashboard/${subItem.link}`}
                                    >
                                        <span>{subItem.label}</span>
                                        {subItem.icon && <subItem.icon {...propsIcons} />}
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
                        {item.icon ? <item.icon {...propsIcons} /> : null}
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
        <div className={`${outfit.className} bg-white text-black p-2 flex flex-col gap-[1rem] text-sm h-screen`}>
            <div className="flex flex-col justify-center items-center mt-5 gap-2 text-indigo-600">
                <Ship size={50} className="border rounded-full border-indigo-600" />
                <h1 className={cn(rock_salt.className)}>
                    {/* (Fluvial LOgistics Ware System Admin) */}
                    FLOWSA
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
            {/* <Button variant="destructive" onClick={handleLogout} className="flex">
                <LogOut size={sizeIcon} /> <span>Cerrar Sesión</span>
            </Button> */}
        </div>
    )
}
