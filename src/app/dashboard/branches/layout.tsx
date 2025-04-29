import SectionLayout from "@/components/layout/SectionLayout";
import { ReactNode } from "react";

export default function BranchesLayout({children}: {children: ReactNode}) {
    return <SectionLayout titlePage="SUCURSALES">
        {children}
    </SectionLayout>
}
