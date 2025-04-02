import Link from "next/link";

export default function LadingPage() {
    return (
        <section className="p-4">
            Lading Page
            <Link
                className="p-2 bg-blue-700 rounded-xl mx-4"
                href="auth/login"
            >
                Inicar Sesión
            </Link>
        </section>
    );
}   