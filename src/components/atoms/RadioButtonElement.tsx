import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'


export interface RadioButtonElementProps extends InputHTMLAttributes<HTMLInputElement> { }


export const RadioButtonElement = ({ className, ...props }: RadioButtonElementProps) => {
    return (

        <input
            {...props}
            className={clsx(
                "form-check-input appearance-none rounded-full h-4 w-4 border border-grey-400 bg-white checked:bg-primary-400 checked:border-2 checked:border-primary-100 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            )}
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
        />

    )
}