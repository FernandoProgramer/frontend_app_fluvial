"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { propsIcons } from "../layout/Sidebar";
import Button, { buttonVariants } from "./Button";
import { cn } from "@/utils/utils";
import * as React from 'react'

function ButtonPage({ children, onPageChange, numPage, currentPage }: { children: React.ReactNode, onPageChange: (page: number) => void, numPage: number, currentPage: number }) {

    return <Button
        variant="ghost"
        type="button"
        onClick={() => onPageChange(numPage)}
        className={cn(currentPage === numPage && buttonVariants({ variant: "secondary" }))}
    >
        {children}
    </Button>

}

export default function Pagination({ totalPages, onPageChange, currentPage }: { totalPages: number, onPageChange: (page: number) => void, currentPage: number }) {

    return (
        <div className="flex gap-2 items-center justify-center">
            <Button
                variant="ghost"
                className={cn(
                    "flex gap-1",
                    (currentPage === 1) &&
                    buttonVariants({ variant: "disabled" })
                )}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <ChevronLeft size={20} {...propsIcons} />
                <span>Anterior</span>
            </Button>

            <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <ButtonPage currentPage={currentPage} key={index} onPageChange={onPageChange} numPage={index + 1}>{index + 1}</ButtonPage>
                ))}
            </div>
            <Button variant="ghost" type="button" className={cn("flex gap-1", currentPage >= totalPages && buttonVariants({ variant: "disabled" }))} onClick={() => onPageChange(currentPage + 1)}>
                <span>
                    Siguiente
                </span>
                <ChevronRight size={20} {...propsIcons} />
            </Button>
        </div>
    )
}
