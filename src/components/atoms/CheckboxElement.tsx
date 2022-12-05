import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';


export interface CheckboxElementProps extends InputHTMLAttributes<HTMLInputElement> { }


export const CheckboxElement = ({ className, ...props }: CheckboxElementProps) => {
    return (

        <Checkbox.Root
            className='w-6 h-6 p-[2px] bg-primary-400 rounded'
        >

            <Checkbox.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-primary-100' />
            </Checkbox.Indicator>
        </Checkbox.Root>


    )
}