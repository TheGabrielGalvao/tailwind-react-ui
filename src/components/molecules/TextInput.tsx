import { Envelope } from "phosphor-react"
import { ChangeEventHandler, ReactNode } from "react"
import { TextElement, TextInputElement } from "../atoms"

interface TextInputProps extends HTMLInputElement {
  label: string
  icon?: ReactNode
  helperText?: string
  handleChange?: ChangeEventHandler<HTMLInputElement>
  register?: any
}

export const TextInput = ({placeholder, name, label, helperText, type, register, icon}: TextInputProps) => {
  return (
    <label htmlFor={name} className='flex flex-col gap-2'>
      <TextElement className='font-semibold'>{label}</TextElement>
      <TextInputElement.Root>
        {
          icon &&
          <TextInputElement.Icon>
            {icon}
          </TextInputElement.Icon>
        }
        <TextInputElement.Input id={name} name={name} type={type} placeholder={placeholder} register={register} />
      </TextInputElement.Root>
      <TextElement className="text-red-400 px-2" size="sm" >{helperText}</TextElement>
    </label>
  )
}