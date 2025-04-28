import Button, { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/utils";
import Link from "next/link";

export default function LadingPage() {
    return (
        <section className="p-4">
            Lading Page
            <Link href="/auth/login" className={cn(buttonVariants({ variant: "primary" }))}>
                Iniciar Sesión
            </Link>
        </section>
    );
}   