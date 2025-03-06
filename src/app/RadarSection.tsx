import { Radar } from 'lucide-react'
import React from 'react'

export default function RadarSection() {
    return (
        <div className="mt-20 bg-gradient-to-tl from-blue-700 to-indigo-900 w-full h-auto flex justify-center items-center">
            <div className="flex flex-col w-200 h-80 p-4 my-2">
                <h1 className="self-center font-extrabold text-lg my-2">Sección para clientes</h1>
                <div className="flex justify-between h-screen rounded-xl overflow-hidden bg-gradient-to-bl from-blue-700 to-blue-900">
                    <div className="w-full">
                        <figure className="w-full h-full">
                            <img
                                className="object-cover max-w-full h-full"
                                src="https://cdn.leonardo.ai/users/d56289b3-f6da-44f9-9a0c-b313f980eb07/generations/efae4a8d-8e1c-48ff-8c70-1629838cda7b/Leonardo_Phoenix_10_A_3Dperspective_smartphone_placed_on_top_o_1.jpg"
                                alt="Rastreando en telefono"
                            />
                        </figure>
                    </div>
                    <div className="p-4 w-full h-screen flex flex-col gap-2 mt-10">
                        <h1 className="font-bold">Rastrea tu pedido</h1>
                        <label htmlFor="num_guia" className="font-medium text-gray-300">Ingresa número de guía</label>
                        <div className="flex gap-1.5 self-start">
                            <input
                                className="border p-2 rounded-md"
                                type="text"
                                placeholder="ENV-31571362"
                                id="num_guia"
                            />
                            <button
                                className="p-2 flex gap-1 justify-center rounded-md bg-blue-300 text-black"
                                type="button"
                            >
                                <Radar />
                                <span>
                                    Rastrear
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
