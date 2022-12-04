import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'


export interface CheckboxElementProps extends InputHTMLAttributes<HTMLInputElement> { }


export const CheckboxElement = ({ className, ...props }: CheckboxElementProps) => {
    return (

        <input
            {...props}
            className={clsx(
                "w-4 h-4 bg-primary-100 rounded border-primary-100 focus:ring-primary-400"
            )}

        />


    )
}