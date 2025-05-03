import SectionLayout from "@/components/layout/SectionLayout";
import { ReactNode } from "react";

export default function ShipmentsLayout({ children }: { children: ReactNode }) {
    return <SectionLayout titlePage="ENVIOS">
        {children}
    </SectionLayout>
}
