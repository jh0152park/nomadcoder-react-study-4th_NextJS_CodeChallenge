import { InputHTMLAttributes } from "react";

interface IInput {
    name: string;
    errors?: string[];
}

export default function Input({
    name,
    errors = [],
    ...extraProps
}: IInput & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <input
                name={name}
                {...extraProps}
                className="w-[350px] px-3 py-2 rounded-lg bg-black border text-[ghostwhite] placeholder:text-[ghostwhite] active:outline-none focus:outline-none font-semibold placeholder:font-semibold "
            />
            {errors.map((error, index) => (
                <span key={index} className="font-medium text-red-500">
                    {error}
                </span>
            ))}
        </div>
    );
}
