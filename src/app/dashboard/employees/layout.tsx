import SectionLayout from "@/components/layout/SectionLayout";
import { ReactNode } from "react";

export const metadata = {
    title: "Dashboard | Employees"
}

export default function EmployeesLayout({ children }: { children: ReactNode }) {
    return (
        <SectionLayout titlePage="PERSONAL">
            {children}
        </SectionLayout>
    )
}
