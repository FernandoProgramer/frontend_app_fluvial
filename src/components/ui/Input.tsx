import { Eye } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export default function Input({ ...props }: InputProps) {
    return (

        <input
            className="p-2 bg-gray-700 rounded-md placeholder:text-gray-400 font-light focus:outline-none"
            {...props}
        />
    )
}
