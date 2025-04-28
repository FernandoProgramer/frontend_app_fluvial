import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { propsIcons } from "../layout/Sidebar";
import Button, { buttonVariants } from "./Button";
import { cn } from "@/utils/utils";


function ButtonPage({ children, currentPage }: { children: ReactNode, currentPage: number }) {


    return <Button variant="ghost" type="button" className={cn(currentPage === 2 && buttonVariants({ variant: "secondary" }))} >
        {children}
    </Button>

}

export default function Pagination() {

    return (
        <div className="flex gap-2 items-center justify-center">
            <Button variant="ghost" className="flex gap-1">
                <ChevronLeft size={20} {...propsIcons} />
                <span>
                    Anterior
                </span>
            </Button>
            <div className="flex gap-2">
                <ButtonPage currentPage={1}>1</ButtonPage>
                <ButtonPage currentPage={2}>2</ButtonPage>
                <ButtonPage currentPage={3}>3</ButtonPage>
                <ButtonPage currentPage={4}>4</ButtonPage>
            </div>
            <Button variant="ghost" type="button" className="flex gap-1">
                <span>
                    Siguiente
                </span>
                <ChevronRight size={20} {...propsIcons} />
            </Button>
        </div>
    )
}
