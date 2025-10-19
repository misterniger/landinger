import { InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

interface InputType
    extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    restClass?: string
    error?: FieldError | string | null
    message?: string | null
    formRegister?: object
    name: string
    label: string
    children: ReactNode
}

function Input({
    name,
    label,
    error,
    message,
    formRegister,
    children,
    ...rest
}: InputType) {
    return (
        <div className="flex w-full flex-col">
            <label htmlFor={name} className="mb-3 text-sm">
                {label}
            </label>
            <div className="relative w-full">
                <label
                    htmlFor={name}
                    className={`${error ? 'text-red-500' : 'text-primary/70'} absolute left-3 top-3 size-4`}
                >
                    {children}
                </label>
                <input
                    name={name}
                    id={name}
                    type="text"
                    {...formRegister}
                    {...rest}
                    className={`disabled:bg-primary/70 placehoder:text-primary w-full rounded-full border bg-[#282828] py-2.5 pl-[42px] pr-3 text-sm outline-none transition-colors duration-300 ${
                        error ? 'border-red-500 text-red-500' : 'border-white/5'
                    }`}
                />
            </div>

            {error && message && (
                <span
                    className={`ml-0.5 mt-2 inline-block self-start text-xs font-light text-red-500 sm:text-sm lg:mt-1.5`}
                >
                    {message}
                </span>
            )}
        </div>
    )
}

export default Input
