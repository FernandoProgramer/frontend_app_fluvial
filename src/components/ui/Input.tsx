interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    register: any,
    name: string,
    errors: any
}

export function Input({ errors, register, name, className, ...props }: InputProps) {
    return <div className="flex flex-col">
        <input
            className={`bg-[#17151F] px-6 py-4 rounded-md focus:outline-none ${className} ${errors[name] && "border-[#E22259] border-2"}`}
            id={name}
            {...props}
            {...register(name)}
        />
        {errors[name] && <span className="text-[#E22259]">{errors[name].message}</span>}
    </div>


}

