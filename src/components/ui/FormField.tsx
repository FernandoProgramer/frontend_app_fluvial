import { cn } from "@/utils/utils"
import { Label } from "./Label"
import { Input } from "./Input"
import ErrorAlert from "./ErrorAlert"
import React, { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react"
import { FieldErrors, UseFormSetValue } from "react-hook-form"
import { Select } from "./Select"

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
    // para el field
    type?: "input" | "select"
    errors: FieldErrors<any>
    name: string

    // Para el label
    label: string
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;

    // para el input
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    register?: any

    // Para la alerta de error
    errorProps?: HTMLAttributes<HTMLSpanElement>;

    // Para el select
    selectProps?: SelectHTMLAttributes<HTMLSelectElement>
    setValue?: UseFormSetValue<any>
    trigger?: any
    children?: React.ReactElement[]
}
export default function FormField({
    type = "input",
    label,
    className,
    name,
    trigger,
    register,
    setValue,
    errors,
    children,
    labelProps = {},
    inputProps = {},
    errorProps = {},
    selectProps = {},
}: FormFieldProps) {


    const componentMap: Record<
        string,
        { Component: React.ElementType | string; props: any }
    > = {
        input: {
            Component: Input,
            props: { ...inputProps, register },
        },
        select: {
            Component: Select,
            props: { ...selectProps, setValue, trigger },
        },
    };

    const { Component, props } = componentMap[type] || {};
    const errorMessage = errors[name]?.message as string | undefined;

    return <div className={cn("flex flex-col gap-2 mb-1", className)}>
        <Label className={cn("", labelProps.className)} {...labelProps}>{label}</Label>
        <div className="relative">
            {Component && (
                <Component
                    name={name}
                    errors={errors}
                    {...props}
                >
                    {type === "select" ? children : null}
                </Component>
            )}
            {errors[name] && <ErrorAlert className="absolute left-0" {...errorProps}>{errorMessage}</ErrorAlert>}
        </div>
    </div >
}
