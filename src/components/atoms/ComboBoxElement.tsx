import { EventHandler, Fragment, KeyboardEvent, MouseEventHandler, OlHTMLAttributes, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Check, CaretDown } from 'phosphor-react'
import { BaseComponent } from '@fullcalendar/react'
import { TextInputElement, TextInputIconProps, TextInputInputProps, TextInputRootElementProps } from './TextInputElement'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { KeyValuePair } from '../../util/interfaces'

// const data = [
//   { id: 1, name: 'Wade Cooper' },
//   { id: 2, name: 'Arlene Mccoy' },
//   { id: 3, name: 'Devon Webb' },
//   { id: 4, name: 'Tom Cook' },
//   { id: 5, name: 'Tanya Fox' },
//   { id: 6, name: 'Hellen Schmidt' },
// ]

export interface ComboBoxElementProps extends BaseComponent {
  placeholder?: string
  children?: ReactNode
}

export const ComboBoxRoot = ({children}: ComboBoxElementProps) => {
    return (
    <div className="flex flex-col gap-1">
      {children}
    </div>
  )
}

export interface ComboboxInputProps extends TextInputInputProps{
  onKeyPressed?: EventHandler<KeyboardEvent> 
  onIconClick?: MouseEventHandler<HTMLButtonElement>
}

export const ComboBoxInput = ({placeholder, onChange, onFocus, onIconClick, onKeyPressed, value}: ComboboxInputProps) => {
  return(
    <TextInputElement.Root>
      <TextInputElement.Input value={value} onKeyDown={onKeyPressed} placeholder={placeholder ?? "Selecione"} onChange={onChange} onFocus={onFocus}  />
      <TextInputElement.Icon onClick={onIconClick}>
          <CaretDown className='cursor-pointer' />
      </TextInputElement.Icon>
    </TextInputElement.Root>
  )
}

export interface ComboboxOptionProps extends OlHTMLAttributes<HTMLOListElement> {
  open?: boolean
  data?: KeyValuePair[]
  selected?: KeyValuePair
}

export const ComboBoxOptions = ({data, open, selected}: ComboboxOptionProps) => {
  return(
    <ul 
     className={clsx(
      'flex flex-col h-auto max-h-60 rounded-md bg-white overflow-y-scroll overflow-x-hidden list-none text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
      {
        'hidden': !open,
        'block': open
      }
    )}>
      {
        data?.map((item) => (
          <li 
            key={item.key}
            className={clsx(
              'p-2 hover:text-blue-400 hover:bg-blue-100 cursor-pointer',
              {
                'bg-blue-100 text-blue-400': item.key === selected?.key,
                'text-gray-500': item.key !== selected?.key
              }
            )}
          >
            {item.value}
          </li>
        ))
      }
    </ul>
  )
}

ComboBoxRoot.displayName = 'ComboboxElement.Root'
ComboBoxInput.displayName = 'ComboboxElement.Input'
ComboBoxOptions.displayName = 'ComboboxElement.Options'

export const ComboBoxElement = {
    Root: ComboBoxRoot,
    Input: ComboBoxInput,
    Options: ComboBoxOptions
}