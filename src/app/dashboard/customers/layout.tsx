import SectionLayout from "@/components/layout/SectionLayout";
import { ReactNode } from "react";

export const metadata = {
    title: "Dashboard | Customers"
}

export default function CustomersLayout({ children }: { children: ReactNode }) {
    return <SectionLayout titlePage="CLIENTES">
        {children}
    </SectionLayout>
}
