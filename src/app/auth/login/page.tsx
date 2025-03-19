"use client"
import { sizeIcon } from "@/components/layout/Sidebar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import LinkForms from "@/components/ui/LinkSimple";
import { fakeLogin } from "@/services/auth.services";
import { loginSchema } from "@/validations/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleChevronLeft, CircleX, LogIn, Ship } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "sonner";

interface InputsLogin {
    email: string
    password: string
}

export default function Login() {

    const router = useRouter();
    const [showError, setShowError] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<InputsLogin>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
        try {
            await fakeLogin(data.email, data.password);
            router.push('/dashboard');
        } catch (error) {
            setShowError(!showError);
        }
    };

    return (
        <section className="flex flex-col md:flex-row w-full h-screen p-4">
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <Link
                    className="p-2 transition duration-100 hover:text-gray-700"
                    href="/"
                >
                    <CircleChevronLeft />
                </Link>

                <h1 className="flex flex-col gap-2 justify-center text-center items-center text-[2rem] font-bold">
                    <Ship size={50} className="text-[#D06942] font-extrabold" />
                    <span>¡Hola, bienvenido nuevamente!</span>
                </h1>
                <p className="font-medium text-gray-500 text-center">
                    Para continuar, por favor ingrese sus credenciales
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[20rem] flex flex-col p-4 gap-2">
                    {showError && (<div className="text-[#E22259] p-2 border-[#E22259] rounded-md text-center flex gap-1 items-center justify-center border-2">
                        <CircleX size={sizeIcon} /> <span>Usuario o contraseña incorrecta</span>
                    </div>)}

                    <Input register={register} name="email" errors={errors} placeholder="Correo electronico" />
                    <Input register={register} name="password" errors={errors} type="password" placeholder="Contraseña" />

                    <div className="p-2">
                        <p className="text-gray-600 font-light text-sm text-center">
                            ¿Contraseña olvidada?{" "}
                            <LinkForms href="#">Recuperar ahora</LinkForms>
                        </p>
                    </div>
                    <div className="p-2 flex justify-between gap-0.5">
                        <Button className="flex w-full items-center justify-center text-center">
                            <LogIn size={sizeIcon} />
                            <span>Ingresar</span>
                        </Button>
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
