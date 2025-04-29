import SectionLayout from "@/components/layout/SectionLayout";
import { ReactNode } from "react";

export default function WineriesLayout({ children }: { children: ReactNode }) {
    return <SectionLayout titlePage="BODEGAS">
        {children}
    </SectionLayout>
}
