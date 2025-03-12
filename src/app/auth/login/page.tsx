import Input from "@/components/ui/Input";
import LinkForms from "@/components/ui/LinkSimple";
import { CircleChevronLeft, LogIn, Ship } from "lucide-react";
import Link from "next/link";

export default function Login() {
    return (
        <section className="flex flex-col md:flex-row w-full h-screen p-4">
            <div className="flex-1 flex flex-col items-center justify-center gap-4 relative">
                <Link
                    className="p-2 absolute transform top-4 transition duration-100 hover:text-gray-700"
                    href="/"
                >
                    <CircleChevronLeft />
                </Link>

                <h1 className="flex flex-col gap-2 justify-center text-center items-center text-[2rem] font-bold">
                    <Ship size={50} className="text-blue-600 font-extrabold" />
                    <span>¡Hola, bienvenido nuevamente!</span>
                </h1>
                <p className="font-medium text-gray-500 text-center">
                    Para continuar, por favor ingrese sus credenciales
                </p>

                <form className="w-full max-w-[20rem] flex flex-col p-4 gap-2">
                    <div className="flex flex-col p-2">
                        <Input id="email" placeholder="Usuario" />
                    </div>
                    <div className="flex flex-col p-2">
                        <Input id="password" type="password" placeholder="Contraseña" />
                    </div>
                    <div className="p-2">
                        <p className="text-gray-600 font-light text-sm text-center">
                            ¿Contraseña olvidada?{" "}
                            <LinkForms href="#">Recuperar ahora</LinkForms>
                        </p>
                    </div>
                    <div className="p-2 flex justify-between gap-0.5">
                        <button className="p-2 flex gap-2 items-center justify-center w-full rounded-md bg-blue-600 text-white">
                            <LogIn />
                            <span>Ingresar</span>
                        </button>
                    </div>
                </form>
            </div>

            {/* Imagen de fondo - Se oculta en pantallas pequeñas */}
            <div className="hidden md:flex flex-1 overflow-hidden rounded-xl relative">
                <img
                    className="object-cover w-full h-full brightness-50"
                    src="https://cdn.leonardo.ai/users/d56289b3-f6da-44f9-9a0c-b313f980eb07/generations/185e9b62-5d0f-43b4-9986-a1b1518fb230/Leonardo_Phoenix_10_Genera_una_ilustracin_de_un_barco_de_carga_1.jpg"
                    alt="Barco navegando"
                />
                <img
                    className="absolute top-[27rem] left-[30rem] w-[5rem] h-[5rem] z-10"
                    src="https://certificadossena.net/wp-content/uploads/2022/10/logo-sena-naranja-svg-2022.svg"
                    alt="logo del sena"
                />
            </div>
        </section>
    );
}
