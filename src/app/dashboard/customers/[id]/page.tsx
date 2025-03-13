"use client"
import { useParams } from "next/navigation";

export default function CustomerPage() {

    const params = useParams();

    return (
        <section>
            Thi is my id {params.id}
        </section>
    )
}
