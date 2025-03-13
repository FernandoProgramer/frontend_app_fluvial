import { ChevronLeft, ChevronRight } from "lucide-react";
import { sizeIcon } from "../layout/Sidebar";
import { ReactNode } from "react";


function ButtonPage({ children, currentPage }: { children: ReactNode, currentPage: number }) {

    const inactivePage: string = "border border-[#D06942] text-[#D06942] hover:bg-[#D06942] hover:text-[#17151F]";
    const activePage: string = "bg-[#D06942] text-[#17151F]";

    return <button type="button" className={`p-2 w-[3rem] rounded-sm transition duration-300 ${currentPage === 2 ? activePage : inactivePage}`}>
        {children}
    </button>

}

export default function Pagination() {

    return (
        <div className="flex justify-between items-center">
            <button type="button" className="border-b border-[#5f2f1e] text-[#5f2f1e] flex gap-1 items-center p-2">
                <ChevronLeft size={sizeIcon} />
                <span>
                    Anterior
                </span>
            </button>
            <div className="flex gap-2">
                <ButtonPage currentPage={1}>1</ButtonPage>
                <ButtonPage currentPage={2}>2</ButtonPage>
                <ButtonPage currentPage={3}>3</ButtonPage>
                <ButtonPage currentPage={4}>4</ButtonPage>
            </div>
            <button type="button" className="border-b border-[#D06942] text-[#D06942] flex gap-1 items-center p-2 justify-center">
                <span>
                    Siguiente
                </span>
                <ChevronRight size={sizeIcon} />
            </button>
        </div>
    )
}
