
import {Slot} from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'


export interface TextInputRootProps {
    children: ReactNode
}

const TextInputRoot = ({children}: TextInputRootProps) => (
    <div className='flex items-center gap-3 py-4 px-3 h-12 rounded bg-blue-100  w-full focus-within:ring-2 ring-cyan-300'>
        {children}
    </div>
)

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = ({...props}: TextInputInputProps) => {
    return (
            <input className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-500"
                {...props} 
            />
)}

export interface TextInputIconProps {
    children: ReactNode
}

const TextInputIcon = ({children}: TextInputRootProps) => {
    
    return (
        <Slot className='w-6 h-6 text-gray-500'>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'
TextInputInput.displayName = 'TextInput.Input'
TextInputRoot.displayName = 'TextInput.Root'


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}