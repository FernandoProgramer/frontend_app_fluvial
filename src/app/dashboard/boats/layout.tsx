import SectionLayout from "@/components/layout/SectionLayout";
import { ReactNode } from "react";

export default function BoatsLayout({ children }: { children: ReactNode }) {
    return <SectionLayout titlePage="EMBARCACIONES">
        {children}
    </SectionLayout>
}
