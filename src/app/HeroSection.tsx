import { SquareDashedMousePointer } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <div className="flex p-4 mt-10">
            <div className="p-2 flex flex-col gap-2">
                <h1 className="text-xl font-extrabold text-[2.5rem] bg-gradient-to-br from-sky-600 to-pink-500 bg-clip-text text-transparent">
                    Optimiza la Gestión Administrativa de tu Empresa de Transporte Fluvial
                </h1>
                <p className="font-medium text-gray-200">Digitaliza y automatiza todas tus operaciones logísticas con nuestro software. <b>Adiós al papel y las hojas de Excel, hola a la eficiencia y seguridad.</b>
                </p>

                <div className="mt-2 self-start">
                    <Link
                        className="bg-gradient-to-r from-violet-500 to-sky-500 rounded-md p-2 text-center flex gap-1 hover:bg-gradient-to-l"
                        href="#"
                    >
                        <SquareDashedMousePointer /> <span>Solicitar ya</span>
                    </Link>
                </div>
            </div>
            <figure>
                <img
                    className="object-cover rounded-md"
                    src="https://cdn.leonardo.ai/users/d56289b3-f6da-44f9-9a0c-b313f980eb07/generations/ac1ba31b-4898-449a-a454-aee6b1bb75af/Leonardo_Phoenix_10_Una_persona_encargada_de_la_administracin_3.jpg"
                    alt="Empleada usando un software"
                />
            </figure>
        </div>
    )
}
