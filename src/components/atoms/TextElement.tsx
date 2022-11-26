import {Slot} from '@radix-ui/react-slot'
import {clsx} from 'clsx'
import { ReactNode } from 'react'

export interface TextElementProps {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?: boolean
    className?: string
}

export const TextElement = ({size = 'md', children, asChild, className }: TextElementProps) => {
    const Comp = asChild ? Slot: 'span'
    return (
        <Comp className={clsx(
        'font-sans text-gray-100',
        {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
        },
        className
        )}>
            {children}
        </Comp>
)}